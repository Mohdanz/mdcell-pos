if(DB.get("auth").role!=="admin") location.href="index.html";

const sTitle = document.getElementById("shiftTitle");
const sDesc  = document.getElementById("shiftDesc");
const btn    = document.getElementById("btnShift");

function render(){
  const s = DB.get("state");
  document.getElementById("saldoAwal").innerText =
    "Rp " + s.saldoAwal.toLocaleString("id-ID");
  document.getElementById("uangLaci").innerText =
    "Rp " + s.uangLaci.toLocaleString("id-ID");
  document.getElementById("shiftSaldo").innerText =
    "Rp " + s.saldoAwal.toLocaleString("id-ID");

  if(s.shiftStatus==="open"){
    sTitle.innerText="SHIFT AKTIF";
    sDesc.innerText="Kasir dapat melakukan transaksi";
    btn.innerText="TUTUP";
    btn.style.background="#ef4444";
  }else{
    sTitle.innerText="SHIFT BELUM DIMULAI";
    sDesc.innerText="Klik tombol START untuk memulai";
    btn.innerText="START";
    btn.style.background="#22c55e";
  }
}

btn.onclick=()=>{
  const s = DB.get("state");
  if(s.shiftStatus==="closed"){
    const modal = Number(prompt("Masukkan Saldo Awal","0"));
    if(isNaN(modal)) return;
    DB.get("archives").push({shift:s.shiftId,data:DB.get("transactions")});
    DB.set("transactions",[]);
    s.shiftId++;
    s.saldoAwal=modal;
    s.uangLaci=modal;
    s.shiftStatus="open";
  }else{
    alert("Shift ditutup");
    s.shiftStatus="closed";
    s.uangLaci=s.saldoAwal;
  }
  DB.set("state",s);
  render();
};

function logout(){
  DB.set("auth",{role:null});
  location.href="index.html";
}

render();
