
if(DB.get("auth").role!=="admin")location.href="index.html";
const btn=document.getElementById("btnShift"),title=document.getElementById("shiftTitle"),desc=document.getElementById("shiftDesc"),saldo=document.getElementById("saldoAwal");
function ringkasanShift(id){
 const data=DB.get("archives").find(a=>a.shift===id)?.data||[];
 let isi=0,tarik=0,income=0;
 data.forEach(t=>{if(t.type==="ISI_SALDO")isi+=t.nominal;if(t.type==="PENARIKAN")tarik+=t.nominal;income+=t.income||0;});
 return{isi,tarik,income,total:data.length};
}
function render(){
 const s=DB.get("state");
 saldo.innerText="Rp "+s.saldoAwal;
 if(s.shiftStatus==="open"){title.innerText="SHIFT AKTIF";desc.innerText="Kasir dapat transaksi";btn.innerText="TUTUP SHIFT";}
 else{title.innerText="SHIFT BELUM DIMULAI";desc.innerText="Klik START SHIFT";btn.innerText="START SHIFT";}
}
btn.onclick=()=>{
 const s=DB.get("state");
 if(s.shiftStatus==="closed"){
  const m=Number(prompt("Saldo Awal","0"));if(isNaN(m))return;
  DB.get("archives").push({shift:s.shiftId,data:DB.get("transactions")});
  DB.set("transactions",[]);
  s.shiftStatus="open";s.shiftId++;s.saldoAwal=m;s.uangLaci=m;
 }else{
  const r=ringkasanShift(s.shiftId);
  alert(`RINGKASAN SHIFT\nTransaksi: ${r.total}\nIsi Saldo: ${r.isi}\nPenarikan: ${r.tarik}\nIncome: ${r.income}`);
  s.shiftStatus="closed";s.uangLaci=s.saldoAwal;
 }
 DB.set("state",s);render();
};
render();
function logout(){DB.set("auth",{role:null});location.href="index.html";}
