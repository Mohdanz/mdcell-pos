// PROTEKSI
if(DB.get("auth").role!=="kasir"){
  location.href="index.html";
}

const state = DB.get("state");

if(state.shiftStatus!=="open"){
  document.body.innerHTML = `
    <div style="padding:40px;text-align:center">
      <h2 style="color:#facc15">SHIFT BELUM DIMULAI</h2>
      <p>Hubungi Admin</p>
    </div>
  `;
  throw new Error("Shift closed");
}

// contoh update uang laci (dipakai modul lain)
function updateLaci(nominal){
  const s = DB.get("state");
  s.uangLaci += nominal;
  DB.set("state",s);
}

function logout(){
  localStorage.clear();
  location.href="index.html";
}
