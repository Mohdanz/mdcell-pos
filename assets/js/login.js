
loginForm.onsubmit=e=>{
 e.preventDefault();
 if(username.value==="admin"&&password.value==="admin123"){DB.set("auth",{role:"admin"});location.href="admin.html";}
 else if(username.value==="kasir"&&password.value==="kasir123"){DB.set("auth",{role:"kasir"});location.href="kasir.html";}
 else alert("Login salah");
};
