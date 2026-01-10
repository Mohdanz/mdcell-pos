// CORE STORAGE
const DB = {
  get(k){ return JSON.parse(localStorage.getItem(k)); },
  set(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
};

// INIT SYSTEM (JANGAN HAPUS)
(function init(){
  if(!DB.get("auth")) DB.set("auth",{ role:null });

  if(!DB.get("state")){
    DB.set("state",{
      shiftStatus:"closed",   // open | closed
      shiftId:0,
      saldoAwal:0,
      uangLaci:0,
      income:0
    });
  }

  if(!DB.get("transactions")) DB.set("transactions",[]);
  if(!DB.get("archives")) DB.set("archives",[]);

  if(!DB.get("ewallets")) DB.set("ewallets",[]);
  if(!DB.get("items")) DB.set("items",[]);
})();
