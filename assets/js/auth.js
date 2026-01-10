function login(){
  const u=document.getElementById("login-user").value;
  const p=document.getElementById("login-pass").value;

  if(u==="admin"&&p==="admin") state.role="ADMIN";
  else if(u==="kasir"&&p==="kasir") state.role="KASIR";
  else return alert("Login salah");

  document.getElementById("login-page").style.display="none";
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("roleText").innerText=state.role;

  if(state.role==="KASIR"){
    document.querySelectorAll(".admin-only").forEach(e=>e.style.display="none");
  }
}
function logout(){location.reload()}