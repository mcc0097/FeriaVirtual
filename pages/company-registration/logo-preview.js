function initLogoPreview() {

    const logoFileInput = document.getElementById('logoFile');
    const logoPreview = document.getElementById('logoPreview');
    const logoPreviewContainer = document.getElementById('logoPreviewContainer');
    const removeLogoBtn = document.getElementById('removeLogoBtn');

    
    if (!logoFileInput || !logoPreview || !logoPreviewContainer || !removeLogoBtn) {
        return;
    }

    // Selected file
    logoFileInput.addEventListener('change', function(event) {
        
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                logoPreview.src = e.target.result;
                logoPreviewContainer.style.display = 'block';
            };
            
            reader.readAsDataURL(file);
            
        } else {
            logoPreviewContainer.style.display = 'none';
        }
    });

    // Button remove "X"
    removeLogoBtn.addEventListener('click', function() {
        
        logoFileInput.value = '';
        
        logoPreview.src = '';
        
        logoPreviewContainer.style.display = 'none';
        
    });
}