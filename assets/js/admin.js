function openShiftPopup(){
  document.getElementById("popupCloseShift").style.display = "flex";
}

function closeShiftPopup(){
  document.getElementById("popupCloseShift").style.display = "none";
}

function confirmCloseShift(){
  // LOGIKA NANTI:
  // - arsip transaksi
  // - hitung ringkasan shift
  // - reset uang laci ke saldo awal

  alert("Shift berhasil ditutup & diarsipkan");
  closeShiftPopup();
}
