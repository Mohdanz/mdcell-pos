const state = {
  role:null,
  shift:false,
  saldoAwal:500000,
  uangLaci:0,
  wallets:JSON.parse(localStorage.getItem("wallets")||"[]"),
  transaksi:[]
};
function save(){
  localStorage.setItem("wallets",JSON.stringify(state.wallets));
}