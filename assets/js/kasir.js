if(localStorage.getItem("role")!=="kasir") location.href="login.html";

let total = Number(localStorage.getItem("kasirTotal")) || 0;
document.getElementById("total").innerText = total;

function tambah(){
  const h = Number(harga.value);
  total += h;
  localStorage.setItem("kasirTotal", total);

  const g = Number(localStorage.getItem("grandTotal")) || 0;
  localStorage.setItem("grandTotal", g + h);

  document.getElementById("total").innerText = total;
  harga.value="";
}

function logout(){
  localStorage.clear();
  location.href="login.html";
}
