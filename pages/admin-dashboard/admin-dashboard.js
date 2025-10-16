// Esta función obtiene el token JWT guardado en el localStorage
function getToken() {
    return localStorage.getItem('auth_token'); // Obtenemos el token desde el localStorage
}

// Esta función decodifica el token JWT para obtener la información del usuario
function decodeToken(token) {
    const payload = token.split('.')[1]; // JWT tiene 3 partes: Header, Payload, Signature
    const decoded = JSON.parse(atob(payload));
    // Decodificamos la parte Payload
    return JSON.parse(decoded); // Convertimos el Payload de JSON a un objeto
}

// Verificamos si el usuario tiene sesión y si es admin
function checkAuth() {
    const token = getToken();
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const user = decodeToken(token);

        // Mostrar el email del usuario
        document.getElementById('userName').textContent = user.email || 'Usuario';

        // Si estamos en la página de admin, comprobar el rol real
        if (window.location.pathname.endsWith('admin.html')) {
            if (user.role !== 'ADMIN') {
                window.location.href = '403.html';
            }
        }

    } catch (error) {
        console.error('Token inválido', error);
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

    // 🔐 Login real con tu backend
    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: username,   // el campo "username" de tu formulario en realidad es el email
            password: password
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }
            return response.json();
        })
        .then(data => {
            // ✅ Guardar el token real devuelto por tu backend
            localStorage.setItem('auth_token', data.access_token);
            // 🔄 Redirigir al panel correspondiente
            window.location.href = 'admin.html';
        })
        .catch(error => {
            alert('Usuario o contraseña incorrectos');
            console.error(error);
        });

});

// Event Listener para el botón de "Cerrar sesión"
document.querySelector('.logout')?.addEventListener('click', logout);