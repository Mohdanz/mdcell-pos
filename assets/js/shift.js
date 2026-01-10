function startShift(){
  if(state.role!=="ADMIN")return;
  state.shift=true;
  state.uangLaci=state.saldoAwal;
  alert("SHIFT DIMULAI");
}
function endShift(){
  if(state.role!=="ADMIN")return;
  state.shift=false;
  alert("SHIFT DITUTUP");
}