if(localStorage.getItem("role")!=="admin"){
  location.href="login.html";
}

const total = Number(localStorage.getItem("grandTotal")) || 0;
document.getElementById("total").innerText = "Rp " + total;

function logout(){
  localStorage.clear();
  location.href="login.html";
}
