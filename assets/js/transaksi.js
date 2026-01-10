
function prosesIsiSaldo(){
 const n=Number(isiNominal.value),b=Number(isiBayar.value);
 if(n<=0||b<=0)return alert("Input salah");
 const s=DB.get("state");
 s.uangLaci+=b;s.income+=b-n;
 DB.get("transactions").push({type:"ISI_SALDO",nominal:n,bayar:b,income:b-n,shiftId:s.shiftId,waktu:Date.now()});
 DB.set("state",s);DB.set("transactions",DB.get("transactions"));
 alert("Isi saldo berhasil");
}
function prosesPenarikan(){
 const n=Number(tarikNominal.value),f=Number(tarikFee.value),t=tarikTipe.value;
 if(n<=0||f<0)return alert("Input salah");
 const s=DB.get("state");
 s.uangLaci-=n;if(t==="ADMIN_CASH")s.uangLaci+=f;s.income+=f;
 DB.get("transactions").push({type:"PENARIKAN",nominal:n,adminFee:f,feeType:t,income:f,shiftId:s.shiftId,waktu:Date.now()});
 DB.set("state",s);DB.set("transactions",DB.get("transactions"));
 alert("Penarikan berhasil");
}
