'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
// Import validations
import {
  validateCompanyName,
  validateEmail,
  validatePhone,
  validateTaxId,
  validateDescription,
  validateWebsite,
  validateLogoFile,
  validateStandType
} from '@/validations/companyValidations';

/**
 * Company Registration Page
 * Form for companies to create their virtual fair profile
 */
export default function CompanyRegistration() {

  // Logo state
  const [logoPreviewUrl, setLogoPreviewUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Error state
  const [errors, setErrors] = useState({});

  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Set page title on component mount
   */
  useEffect(() => {
    document.title = 'Company Registration - Virtual Fair';
  }, []);

  /**
   * Handles logo file selection and preview
   * @param {Event} event - File input change event
   */
  const handleLogoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Removes selected logo and clears preview
   */
  const handleRemoveLogo = () => {
    setLogoPreviewUrl('');
    setSelectedFile(null);

    const logoInput = document.getElementById('logoFile');
    if (logoInput) {
      logoInput.value = '';
    }
  };

  /**
   * Clears form and resets all states
   */
  const handleClearForm = () => {
    setLogoPreviewUrl('');
    setSelectedFile(null);
    setErrors({});
  };

  /**
   * Handles form submission and validation
   * @param {Event} event - Form submit event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});

    console.log('Validating form...');

    // Get form fields
    const form = event.target;
    const companyName = form.companyName.value;
    const contactEmail = form.contactEmail.value;
    const contactPhone = form.contactPhone.value;
    const taxId = form.taxId.value;
    const companyDescription = form.companyDescription.value;
    const website = form.website.value;
    const logoFile = form.logoFile.files[0];
    const standType = form.standType.value;

    // Validate all fields
    const validations = [
      { field: 'companyName', validator: () => validateCompanyName(companyName), focusField: form.companyName },
      { field: 'contactEmail', validator: () => validateEmail(contactEmail), focusField: form.contactEmail },
      { field: 'contactPhone', validator: () => validatePhone(contactPhone), focusField: form.contactPhone },
      { field: 'taxId', validator: () => validateTaxId(taxId), focusField: form.taxId },
      { field: 'companyDescription', validator: () => validateDescription(companyDescription), focusField: form.companyDescription },
      { field: 'website', validator: () => validateWebsite(website), focusField: form.website },
      { field: 'logoFile', validator: () => validateLogoFile(logoFile), focusField: form.logoFile },
      { field: 'standType', validator: () => validateStandType(standType), focusField: form.standType }
    ];

    // Run all validations and stop at first error
    for (const { field, validator, focusField } of validations) {
      const result = validator();

      if (!result.valid) {
        setErrors({ [field]: result.error });
        focusField.focus();
        return;
      }
    }

    // ✅ All validations passed - Save data
    console.log('✅ All validations passed!');

    const companyData = {
      companyName: companyName.trim(),
      contactEmail: contactEmail.trim().toLowerCase(),
      contactPhone: contactPhone.trim(),
      taxId: taxId.trim().toUpperCase(),
      companyDescription: companyDescription.trim(),
      website: website.trim(),
      logoFileName: logoFile.name,
      standType: standType,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    localStorage.setItem('companyProfile', JSON.stringify(companyData));

    // Show success message
    setShowSuccess(true);

    // Clear form after delay
    setTimeout(() => {
      form.reset();
      setLogoPreviewUrl('');
      setSelectedFile(null);
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Company Profile</h1>

      {/* Success Modal */}
      {showSuccess && (
        <>
          <div className={styles.successOverlay}></div>
          <div className={styles.successModal}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.successTitle}>Success!</h2>
            <p className={styles.successText}>
              Company profile saved successfully
            </p>
            <div className={styles.successSubtext}>
              Redirecting in a moment...
            </div>
          </div>
        </>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>

        {/* Information Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information</h2>

          {/* Company Name */}
          <div className={styles.formGroup}>
            <label htmlFor="companyName" className={styles.label}>
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Ex. TechNova S.L."
              className={styles.input}
            />
            {errors.companyName && (
              <span className={styles.error}>{errors.companyName}</span>
            )}
          </div>

          {/* Contact Email */}
          <div className={styles.formGroup}>
            <label htmlFor="contactEmail" className={styles.label}>
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="company@domain.com"
              className={styles.input}
            />
            {errors.contactEmail && (
              <span className={styles.error}>{errors.contactEmail}</span>
            )}
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <label htmlFor="contactPhone" className={styles.label}>
              Phone
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              placeholder="+34 600 000 000"
              className={styles.input}
            />
            {errors.contactPhone && (
              <span className={styles.error}>{errors.contactPhone}</span>
            )}
          </div>

          {/* CIF / NIF */}
          <div className={styles.formGroup}>
            <label htmlFor="taxId" className={styles.label}>
              CIF / NIF
            </label>
            <input
              type="text"
              id="taxId"
              name="taxId"
              placeholder="Ex, B12345678 or 12345678Z"
              className={styles.input}
            />
            {errors.taxId && (
              <span className={styles.error}>{errors.taxId}</span>
            )}
          </div>

          {/* Company Description */}
          <div className={styles.formGroup}>
            <label htmlFor="companyDescription" className={styles.label}>
              Company Description
            </label>
            <textarea
              id="companyDescription"
              name="companyDescription"
              placeholder="Tell us briefly what your company does"
              rows="5"
              className={styles.textarea}
            ></textarea>
            {errors.companyDescription && (
              <span className={styles.error}>{errors.companyDescription}</span>
            )}
          </div>

          {/* Website */}
          <div className={styles.formGroup}>
            <label htmlFor="website" className={styles.label}>
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="www.yourcompany.com"
              className={styles.input}
            />
            {errors.website && (
              <span className={styles.error}>{errors.website}</span>
            )}
          </div>

          {/* Logo */}
          <div className={styles.formGroup}>
            <label htmlFor="logoFile" className={styles.label}>
              Logo
            </label>
            <input
              type="file"
              id="logoFile"
              name="logoFile"
              accept="image/*"
              onChange={handleLogoChange}
              className={styles.fileInput}
            />
            <p className={styles.helperText}>
              Select an image (JPG, PNG, etc.)
            </p>
            {errors.logoFile && (
              <span className={styles.error}>{errors.logoFile}</span>
            )}

            {/* Logo Preview */}
            {logoPreviewUrl && (
              <div className={styles.logoPreview}>
                <img src={logoPreviewUrl} alt="Logo preview" className={styles.logoImage} />
                <button
                  type="button"
                  onClick={handleRemoveLogo}
                  className={styles.removeLogoBtn}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Stand Type */}
          <div className={styles.formGroup}>
            <label htmlFor="standType" className={styles.label}>
              Stand Type
            </label>
            <select
              id="standType"
              name="standType"
              className={styles.select}
            >
              <option value="">— Select an option —</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
            {errors.standType && (
              <span className={styles.error}>{errors.standType}</span>
            )}
          </div>
        </section>

        {/* Form Actions */}
        <div className={styles.actions}>
          <button type="submit" className={styles.submitBtn}>
            Save
          </button>
          <button type="reset" onClick={handleClearForm} className={styles.clearBtn}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}