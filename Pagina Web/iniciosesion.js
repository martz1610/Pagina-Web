const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const switchLoginBtn = document.querySelector('#switch-to-login');
const switchRegisterBtn = document.querySelector('#switch-to-register');
const loginBtn = document.querySelector('#login-btn');
const registerBtn = document.querySelector('#register-btn');


// Función para validar el formulario de inicio de sesión
function validateLoginForm() {
const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#password').value.trim();

if (username === '') {
alert('Por favor, ingrese su nombre de usuario.');
return false;
}

if (password === '') {
alert('Por favor, ingrese su contraseña.');
return false;
}

return true;
}

// Función para validar el formulario de registro
function validateRegisterForm() {
    const newUsername = document.querySelector('#new-username').value.trim();
    const newPassword = document.querySelector('#new-password').value.trim();
  
    if (newUsername === '') {
      alert('Por favor, ingrese un nombre de usuario válido.');
      return false;
    }
  
    if (newPassword === '') {
      alert('Por favor, ingrese una contraseña válida.');
      return false;
    }
  
    // Redirigir al usuario a la página de inicio
    window.location.href = 'html';
    return true;
  }
  
  

