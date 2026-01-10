function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Username & Password wajib diisi");
    return;
  }

  // LOGIN SIMULASI
  if (user === "admin" && pass === "admin") {
    localStorage.setItem("mdcell_login", "true");
    localStorage.setItem("mdcell_role", "admin");

    alert("Login Admin Berhasil");
    window.location.replace("./dashboard.html");
  } else {
    alert("Username / Password salah");
  }
}

function logout() {
  localStorage.clear();
  window.location.replace("./index.html");
}

function startShift() {
  alert("Shift dimulai (dummy)");
}
