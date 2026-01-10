function addWallet(name,saldo){
  state.wallets.push({name,balance:saldo});
  save();
}