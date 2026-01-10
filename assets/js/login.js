const toggle = document.getElementById('togglePassword');
const password = document.getElementById('password');

toggle.onclick = () => {
  password.type = password.type === 'password' ? 'text' : 'password';
};
