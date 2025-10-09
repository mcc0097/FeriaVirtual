document.addEventListener('DOMContentLoaded', () => {
    
    //Form
    const form = document.getElementById('form-company-profile');

    //Button submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Validate Form

        //Company Name Field

        // ========================================
        // PASO 5a: VALIDAR LOS DATOS
        // ========================================
        
        // 1. OBTENER EL VALOR del campo "companyName"
        // --------------------------------------------------
        // Obtenemos el elemento input por su ID
        const companyNameField = document.getElementById('companyName');
        
        // Obtenemos el texto que escribió el usuario y quitamos espacios
        const companyName = companyNameField.value.trim();
        
        console.log('Nombre de empresa introducido:', companyName);
        
        // 2. COMPROBAR si está vacío
        // --------------------------------------------------
        if (companyName === '') {
            // Si está vacío, mostramos error y detenemos todo
            alert('❌ Error: El nombre de la empresa es obligatorio');
            
            // Ponemos el cursor en el campo para ayudar al usuario
            companyNameField.focus();
            
            // Salimos de la función, no continuamos
            return;
        }
        
    });

});
