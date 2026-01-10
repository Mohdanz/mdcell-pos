const form = document.getElementById('loginForm');
const btn = document.getElementById('loginBtn');
const error = document.getElementById('errorMsg');
const toggle = document.getElementById('togglePassword');
const password = document.getElementById('password');

toggle.onclick = () => {
  password.type = password.type === 'password' ? 'text' : 'password';
};

form.onsubmit = e => {
  e.preventDefault();

  error.textContent = '';
  btn.classList.add('loading');
  btn.textContent = 'Memproses...';

  const user = username.value.trim();
  const pass = password.value.trim();

  setTimeout(() => {
    if (!user || !pass) {
      error.textContent = 'Username dan password wajib diisi';
      resetBtn();
      return;
    }

    // SIMULASI LOGIN (ganti ke API / Laravel)
    if (user === 'admin' && pass === 'admin') {
      alert('Login berhasil');
      // window.location.href = 'dashboard.html';
    } else {
      error.textContent = 'Username atau password salah';
      resetBtn();
    }
  }, 1200);
};

function resetBtn() {
  btn.classList.remove('loading');
  btn.textContent = '⚡ Masuk ke Sistem';
}
