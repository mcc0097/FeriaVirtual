/**
 * Company Registration Form Validations
 * Contains all validation functions and regex patterns for company profile forms
 */

/**
 * Validates company name
 * @param {string} name - Company name to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateCompanyName(name) {
    const trimmedName = name.trim();

    if (trimmedName === '') {
        return { valid: false, error: 'Company name is required' };
    }

    return { valid: true };
}

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateEmail(email) {
    const trimmedEmail = email.trim().toLowerCase();

    if (trimmedEmail === '') {
        return { valid: false, error: 'Email is required' };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
        return { valid: false, error: 'Email format is invalid' };
    }

    return { valid: true };
}

/**
 * Validates phone number
 * @param {string} phone - Phone number to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validatePhone(phone) {
    const trimmedPhone = phone.trim();

    if (trimmedPhone === '') {
        return { valid: false, error: 'Phone number is required' };
    }

    const phonePattern = /^[\d\s+\-()]+$/;
    if (!phonePattern.test(trimmedPhone)) {
        return { valid: false, error: 'Phone can only contain numbers, spaces, + and -' };
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 9) {
        return { valid: false, error: 'Phone must have at least 9 digits' };
    }

    return { valid: true };
}

/**
 * Validates Tax ID (CIF/NIF)
 * @param {string} taxId - Tax ID to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateTaxId(taxId) {
    const trimmedTaxId = taxId.trim().toUpperCase();

    if (trimmedTaxId === '') {
        return { valid: false, error: 'Tax ID is required' };
    }

    const taxIdPattern = /^([A-Z]\d{8}|\d{8}[A-Z])$/;
    if (!taxIdPattern.test(trimmedTaxId)) {
        return { valid: false, error: 'Tax ID must be: letter + 8 numbers OR 8 numbers + letter' };
    }

    return { valid: true };
}

/**
 * Validates company description
 * @param {string} description - Company description to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateDescription(description) {
    const trimmedDescription = description.trim();

    if (trimmedDescription === '') {
        return { valid: false, error: 'Company description is required' };
    }

    return { valid: true };
}

/**
 * Validates website URL
 * @param {string} website - Website URL to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateWebsite(website) {
    const trimmedWebsite = website.trim();

    if (trimmedWebsite === '') {
        return { valid: false, error: 'Website is required' };
    }

    const urlPattern = /^www\.[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
    if (!urlPattern.test(trimmedWebsite)) {
        return { valid: false, error: 'Website must have format: www.company.com' };
    }

    return { valid: true };
}

/**
 * Validates logo file
 * @param {File} file - File object to validate
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateLogoFile(file) {
    if (!file) {
        return { valid: false, error: 'Logo file is required' };
    }

    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validImageTypes.includes(file.type)) {
        return { valid: false, error: 'File must be an image (JPEG, PNG, GIF or WEBP)' };
    }

    return { valid: true };
}

/**
 * Validates stand type selection
 * @param {string} standType - Stand type value
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateStandType(standType) {
    if (standType === '') {
        return { valid: false, error: 'Stand type is required' };
    }

    return { valid: true };
}