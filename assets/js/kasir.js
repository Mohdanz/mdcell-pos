
if(DB.get("auth").role!=="kasir")location.href="index.html";
if(DB.get("state").shiftStatus!=="open"){document.body.innerHTML="<h2>SHIFT BELUM DIMULAI</h2>";throw"";}
function logout(){DB.set("auth",{role:null});location.href="index.html";}
