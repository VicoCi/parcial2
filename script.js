// script.js
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Email inválido');
  } else {
    alert('¡Gracias por suscribirte!');
  }
});