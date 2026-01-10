// PROTEKSI
if(DB.get("auth").role!=="admin"){
  location.href="index.html";
}

const btnShift   = document.getElementById("btnShift");
const shiftTitle = document.getElementById("shiftTitle");
const shiftDesc  = document.getElementById("shiftDesc");
const saldoView  = document.getElementById("saldoAwal");

function renderAdmin(){
  const s = DB.get("state");

  saldoView.innerText = "Rp " + s.saldoAwal.toLocaleString("id-ID");

  if(s.shiftStatus==="open"){
    shiftTitle.innerText = "SHIFT AKTIF";
    shiftDesc.innerText  = "Kasir dapat melakukan transaksi";
    btnShift.innerText   = "⏹ TUTUP SHIFT";
  }else{
    shiftTitle.innerText = "SHIFT BELUM DIMULAI";
    shiftDesc.innerText  = "Klik START SHIFT untuk memulai";
    btnShift.innerText   = "▶ START SHIFT";
  }
}

btnShift.onclick = () => {
  const s = DB.get("state");

  if(s.shiftStatus==="closed"){
    const saldo = Number(prompt("Masukkan Saldo Awal","0"));
    if(isNaN(saldo)) return;

    // arsip transaksi lama
    if(DB.get("transactions").length){
      DB.get("archives").push({
        shiftId:s.shiftId,
        data:DB.get("transactions")
      });
      DB.set("archives", DB.get("archives"));
    }

    s.shiftStatus = "open";
    s.shiftId++;
    s.saldoAwal = saldo;
    s.uangLaci  = saldo;
    DB.set("transactions",[]);
  }else{
    s.shiftStatus = "closed";
    s.uangLaci = s.saldoAwal;
  }

  DB.set("state",s);
  renderAdmin();
};

renderAdmin();

function logout(){
  localStorage.clear();
  location.href="index.html";
}
