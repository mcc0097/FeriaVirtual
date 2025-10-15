// Show error
function showError(fieldId, message) {
    
    const field = document.getElementById(fieldId);
    
    const errorSpan = document.getElementById('error-' + fieldId);
    
    if (!field || !errorSpan) {
        return;
    }
    
    // Add class error to the field
    field.classList.add('error');
    
    // Put the message in the span
    errorSpan.textContent = message;
    
    // Make the span visible
    errorSpan.classList.add('show');
    
    field.focus();
}

//Hide error
function hideError(fieldId) {
    
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById('error-' + fieldId);
    
    // if field or errorSpan exists, remove
    if (field) {
        field.classList.remove('error');
    }
    
    if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.classList.remove('show');
    }
}

// Hide all errors
function hideAllErrors() {
    
    // Obtain all spans with class "error-message"
    const allErrorSpans = document.querySelectorAll('.error-message');
    
    // Each all spans, clean text and remove class show
    allErrorSpans.forEach(function(span) {
        span.textContent = '';
        span.classList.remove('show');
    });
    
    // Also remove class error from all fields
    const allErrorFields = document.querySelectorAll('.error');
    allErrorFields.forEach(function(field) {
        field.classList.remove('error');
    });
}