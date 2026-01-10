document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234"){
    localStorage.setItem("login","true");
    alert("Login berhasil");
    // window.location.href = "kasir.html";
  } else {
    alert("Username atau password salah");
  }
});
