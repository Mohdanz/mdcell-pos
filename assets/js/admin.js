// proteksi
if(localStorage.getItem("role")!=="admin"){
  location.href="index.html";
}

// init
if(!localStorage.getItem("shift")){
  localStorage.setItem("shift","closed");
}

const shiftStatus = document.getElementById("shiftStatus");
const startBtn = document.getElementById("startShift");

// render
function renderShift(){
  const s = localStorage.getItem("shift");
  if(s==="open"){
    shiftStatus.innerText = "SHIFT AKTIF";
    startBtn.innerText = "STOP";
    startBtn.style.background = "#ef4444";
  }else{
    shiftStatus.innerText = "SHIFT BELUM DIMULAI";
    startBtn.innerText = "START";
    startBtn.style.background = "#22c55e";
  }
}

startBtn.onclick = () => {
  if(localStorage.getItem("shift")==="open"){
    localStorage.setItem("shift","closed");
  }else{
    localStorage.setItem("shift","open");
    localStorage.setItem("shiftStart",Date.now());
  }
  renderShift();
};

renderShift();

// total admin
const total = Number(localStorage.getItem("grandTotal")) || 0;
document.getElementById("adminTotal").innerText = "Rp "+total;

function logout(){
  localStorage.clear();
  location.href="index.html";
}
