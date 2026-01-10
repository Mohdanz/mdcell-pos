
const DB={get:k=>JSON.parse(localStorage.getItem(k)),set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
(()=>{
 if(!DB.get("auth"))DB.set("auth",{role:null});
 if(!DB.get("state"))DB.set("state",{shiftStatus:"closed",shiftId:0,saldoAwal:0,uangLaci:0,income:0});
 if(!DB.get("transactions"))DB.set("transactions",[]);
 if(!DB.get("archives"))DB.set("archives",[]);
})();
