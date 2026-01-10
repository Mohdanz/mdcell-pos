function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (!user || !pass) {
    alert('Username dan Password wajib diisi');
    return;
  }

  // SIMULASI ROLE
  if (user === 'admin') {
    localStorage.setItem('role', 'admin');
    alert('Login Admin Berhasil');
    // window.location.href = 'admin.html';
  } else {
    localStorage.setItem('role', 'kasir');
    alert('Login Kasir Berhasil');
    // window.location.href = 'kasir.html';
  }
}
