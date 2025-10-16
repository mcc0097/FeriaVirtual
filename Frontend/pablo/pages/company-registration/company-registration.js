document.addEventListener('DOMContentLoaded', () => {
    initLogoPreview();
    
    const form = document.getElementById('form-company-profile');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clean previous errors
        hideAllErrors();

        //Company name validation
        const companyNameField = document.getElementById('companyName');
        const companyName = companyNameField.value.trim();
        
        if (companyName === '') {
            showError('companyName', 'El nombre de la empresa es obligatorio');
            return;
        }

        //Email validation
        const contactEmailField = document.getElementById('contactEmail');
        const contactEmail = contactEmailField.value.trim().toLowerCase();
        
        if (contactEmail === '') {
            showError('contactEmail', 'El email de contacto es obligatorio');
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(contactEmail)) {
            showError('contactEmail', 'El email no tiene un formato válido');
            return;
        }

        //Phone validation
        const contactPhoneField = document.getElementById('contactPhone');
        const contactPhone = contactPhoneField.value.trim();
        
        if (contactPhone === '') {
            showError('contactPhone', 'El teléfono es obligatorio');
            return;
        }
        
        const phonePattern = /^[\d\s+\-()]+$/;
        if (!phonePattern.test(contactPhone)) {
            showError('contactPhone', 'El teléfono solo puede contener números, espacios, + y -');
            return;
        }
        
        const digitsOnly = contactPhone.replace(/\D/g, '');
        if (digitsOnly.length < 9) {
            showError('contactPhone', 'El teléfono debe tener al menos 9 dígitos');
            return;
        }

        //CIF/NIF validation
        const taxIdField = document.getElementById('taxId');
        const taxId = taxIdField.value.trim().toUpperCase();
        
        if (taxId === '') {
            showError('taxId', 'El CIF/NIF es obligatorio');
            return;
        }
        
        const taxIdPattern = /^([A-Z]\d{8}|\d{8}[A-Z])$/;
        if (!taxIdPattern.test(taxId)) {
            showError('taxId', 'El CIF/NIF debe tener formato: letra + 8 números o 8 números + letra');
            return;
        }

        //Description validation
        const companyDescriptionField = document.getElementById('companyDescription');
        const companyDescription = companyDescriptionField.value.trim();
        
        if (companyDescription === '') {
            showError('companyDescription', 'La descripción de la empresa es obligatoria');
            return;
        }

        //Website validation
        const websiteField = document.getElementById('website');
        const website = websiteField.value.trim();
        
        if (website === '') {
            showError('website', 'El sitio web es obligatorio');
            return;
        }
        
        const urlPattern = /^www\.[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
        if (!urlPattern.test(website)) {
            showError('website', 'El sitio web debe ser una URL válida');
            return;
        }

        //Logo validation
        const logoField = document.getElementById('logoFile');
        
        if (!logoField.files || logoField.files.length === 0) {
            showError('logoFile', 'Debes seleccionar un logo');
            return;
        }

        // File type validation
        const file = logoField.files[0];
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!validImageTypes.includes(file.type)) {
            showError('logoFile', 'El archivo debe ser una imagen (JPEG, PNG, GIF o WEBP)');
            return;
        }

        //Stand type validation
        const standTypeField = document.getElementById('standType');
        const standType = standTypeField.value;
        
        if (standType === '') {
            showError('standType', 'Debes seleccionar un tipo de stand');
            return;
        }

        //Save data in localStorage
        const companyData = {
            companyName: companyName,
            contactEmail: contactEmail,
            contactPhone: contactPhone,
            taxId: taxId,
            companyDescription: companyDescription,
            website: website,
            logoFileName: logoField.files[0].name,
            standType: standType,
            createdAt: new Date().toISOString()
        };
        
        localStorage.setItem('companyProfile', JSON.stringify(companyData));
        
        // Este alert de éxito lo dejamos (es positivo)
        alert('✅ ¡Perfil de empresa creado con éxito!');
        
        //Form reset
        form.reset();

        const logoPreviewContainer = document.getElementById('logoPreviewContainer');
        const logoPreview = document.getElementById('logoPreview');
        if (logoPreviewContainer && logoPreview) {
            logoPreview.src = '';
            logoPreviewContainer.style.display = 'none';
        }
    });
});