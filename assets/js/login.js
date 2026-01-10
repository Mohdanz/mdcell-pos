loginForm.onsubmit = e => {
  e.preventDefault();
  const u = username.value;
  const p = password.value;

  if(u==="admin" && p==="admin123"){
    localStorage.setItem("role","admin");
    location.href="admin.html";
  } else if(u==="kasir" && p==="kasir123"){
    localStorage.setItem("role","kasir");
    location.href="kasir.html";
  } else {
    alert("Login salah");
  }
};
