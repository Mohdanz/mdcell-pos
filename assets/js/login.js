const popup = document.getElementById("popup");
const title = document.getElementById("popupTitle");
const msg = document.getElementById("popupMsg");

function togglePassword(){
  const p = document.getElementById("password");
  p.type = p.type === "password" ? "text" : "password";
}

function showPopup(t, m){
  title.innerText = t;
  msg.innerText = m;
  popup.classList.add("show");
}

function closePopup(){
  popup.classList.remove("show");
}

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const u = username.value;
  const p = password.value;

  if(u === "admin" && p === "1234"){
    localStorage.setItem("login","true");
    showPopup("Login Berhasil", "Selamat datang di sistem MD CELL");
    // window.location.href="kasir.html";
  } else {
    showPopup("Login Gagal", "Username atau password salah");
  }
});
