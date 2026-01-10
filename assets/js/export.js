
function exportRiwayatExcel(){
 const rows=[["Tanggal","Shift","Jenis","Nominal","Income"]];
 DB.get("archives").forEach(a=>a.data.forEach(t=>rows.push([new Date(t.waktu).toLocaleString(),a.shift,t.type,t.nominal||"",t.income||""])));
 const csv=rows.map(r=>r.join(",")).join("\n");
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
 a.download="mdcell_riwayat.csv";a.click();
}
