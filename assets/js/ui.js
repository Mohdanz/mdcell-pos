window.onload=()=>{
  setTimeout(()=>document.getElementById("app-loading").style.display="none",800);
};
function route(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}