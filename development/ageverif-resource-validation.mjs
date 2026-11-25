// Step 298: OFFLINE TEST PREPARATION ONLY. Not imported by the app.
// Never call this with browser-supplied data. The future server must obtain
// resources over authenticated HTTPS after a one-time, user-bound OAuth state
// check. Test responses must NEVER grant production access or enter the real
// majority_proofs table. The accepted assurance level and region are conservative
// proposed settings, not an attestation of compliance. No credentials or calls here.
export function validateAgeVerifResponse(body, nowMs=Date.now()) {
  const r=body?.resources;
  if(!r || r.verified!==true || !Number.isInteger(r.age_threshold) || r.age_threshold<18) return null;
  if(r.country!=="FR" || r.assurance_level!=="STRICT") return null;
  if(typeof r.uid!=="string" || !/^[A-Za-z0-9_-]{8,128}$/.test(r.uid)) return null;
  if(!Number.isSafeInteger(r.expires_at)||r.expires_at>Math.floor(8640000000000000/1000)||r.expires_at<=Math.floor(nowMs/1000)) return null;
  return {uid:r.uid,expiresAt:new Date(r.expires_at*1000).toISOString()};
}

// Local synthetic cases (node --test is not required; run this file with Node).
export function selfTest(){
 const now=1800000000000;
 const good={"verified":true,"age_threshold":18,"country":"FR","assurance_level":"STRICT","uid":"TestProof012345","expires_at":1800000600};
 const cases=[["positive",{},true],["underage",{"age_threshold":17},false],["unverified",{"verified":false},false],["expired",{"expires_at":1800000000},false],["weak assurance",{"assurance_level":"STANDARD"},false],["foreign region",{"country":"US"},false],["invalid uid",{"uid":""},false],["string threshold",{"age_threshold":"18"},false],["missing expiration",{"expires_at":null},false],["invalid date",{"expires_at":9007199254740991},false]];
 for(const [name,patch,expected] of cases){
  if(Boolean(validateAgeVerifResponse({resources:{...good,...patch}},now))!==expected)throw new Error(name);
 }
 return cases.length;
}
