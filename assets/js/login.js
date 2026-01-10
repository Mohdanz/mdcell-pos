loginForm.onsubmit = e => {
  e.preventDefault();

  const u = username.value.trim();
  const p = password.value.trim();

  if(u==="admin" && p==="admin123"){
    DB.set("auth",{role:"admin"});
    location.href="admin.html";
  }
  else if(u==="kasir" && p==="kasir123"){
    DB.set("auth",{role:"kasir"});
    location.href="kasir.html";
  }
  else{
    alert("Login gagal");
  }
};
