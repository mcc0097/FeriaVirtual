// Esta función obtiene el token JWT guardado en el localStorage
function getToken() {
    return localStorage.getItem('auth_token'); // Obtenemos el token desde el localStorage
}

// Esta función decodifica el token JWT para obtener la información del usuario
function decodeToken(token) {
    const payload = token.split('.')[1]; // JWT tiene 3 partes: Header, Payload, Signature
    const decoded = atob(payload); // Decodificamos la parte Payload
    return JSON.parse(decoded); // Convertimos el Payload de JSON a un objeto
}

// Verificamos si el usuario tiene sesión y si es admin
function checkAuth() {
    const token = getToken(); // Obtenemos el token
    if (!token) {
        // Si no hay token, redirigimos al login
        window.location.href = 'login.html';
        return;
    }

    try {
        const user = decodeToken(token); // Decodificamos el token
        const userName = user.username || 'Usuario'; // Mostramos el nombre de usuario
        document.getElementById('userName').textContent = userName; // Establecemos el nombre en el panel

        //Hace check si estamos en la página de admin
        if (window.location.pathname === '/admin.html') {
            // Si estamos en la página de admin
            if (user.role !== 'admin') {
                // Si el usuario no es admin, redirigimos a 403 (sin permisos)
                window.location.href = '403.html';
            }
        }
    } catch (error) {
        // Si el token es inválido o no puede ser decodificado, redirigimos al login
        window.location.href = 'login.html';
    }
}

// Esta función cierra la sesión (eliminando el token)
function logout() {
    localStorage.removeItem('auth_token'); // Eliminamos el token
    window.location.href = 'login.html'; // Redirigimos al login
}

// Si estamos en la página de admin, verificamos el acceso
if (window.location.pathname === '/admin.html') {
    checkAuth(); // Verificamos si el usuario tiene sesión y es admin
}

// Manejo del formulario de login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulamos un login (esto se puede reemplazar por una validación real)
    if (username === 'admin' && password === 'admin123') {
        const token = btoa(JSON.stringify({ username: 'admin', role: 'admin' })); // Generamos un token, que codificamos a partir de un objeto y pasamos a texto
        localStorage.setItem('auth_token', token); // Guardamos el token en localStorage
        window.location.href = 'admin.html'; // Redirigimos al panel de admin
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// Event Listener para el botón de "Cerrar sesión"
document.querySelector('.logout')?.addEventListener('click', logout);