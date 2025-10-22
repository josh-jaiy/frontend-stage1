/*
 * Combined Script: Profile Time Updater + Contact Form Validation
 *
 * This unified script handles two primary front-end functions:
 *
 * 1. Profile Card Time Updater:
 *    - Continuously updates the current time (in milliseconds) on the element
 *      with data-testid="test-user-time" every second.
 *
 * 2. Contact Form Validation:
 *    - Validates user input on the "Contact Us" form before submission.
 *    - Checks for required fields, valid email format, and a minimum message length.
 *    - Displays accessible error and success messages.
 *
 * Both functionalities run after the DOM is fully loaded.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
   * 1. PROFILE CARD TIME UPDATER
   * ============================================================
   */
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (timeElement) {
    // Function to update current time in milliseconds
    const updateTime = () => {
      timeElement.textContent = Date.now().toString();
    };

    // Initial update and interval refresh every second
    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ============================================================
   * 2. CONTACT FORM VALIDATION
   * ============================================================
   */
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("contact-success");

  // Helper: Email validation pattern
  function validateEmail(email) {
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return pattern.test(email);
  }

  // Helper: Display field-specific error
  function showError(input, errorId, message) {
    const errorElem = document.getElementById(errorId);
    if (!errorElem) return;
    errorElem.textContent = message;
    errorElem.classList.add("error-message");
    errorElem.setAttribute("role", "alert");
    input.classList.add("error-input");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", errorId);
  }

  // Helper: Clear field-specific error
  function clearError(input, errorId) {
    const errorElem = document.getElementById(errorId);
    if (!errorElem) return;
    errorElem.textContent = "";
    errorElem.removeAttribute("role");
    input.classList.remove("error-input");
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
  }

  // Form submission handler
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let hasError = false;

      // Input elements
      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const subjectInput = document.getElementById("contact-subject");
      const messageInput = document.getElementById("contact-message");

      // Name validation
      if (nameInput.value.trim().length === 0) {
        showError(nameInput, "error-name", "Please enter your full name.");
        hasError = true;
      } else {
        clearError(nameInput, "error-name");
      }

      // Email validation
      const emailValue = emailInput.value.trim();
      if (emailValue.length === 0) {
        showError(
          emailInput,
          "error-email",
          "Please enter your email address."
        );
        hasError = true;
      } else if (!validateEmail(emailValue)) {
        showError(
          emailInput,
          "error-email",
          "Please enter a valid email (e.g., name@example.com)."
        );
        hasError = true;
      } else {
        clearError(emailInput, "error-email");
      }

      // Subject validation
      if (subjectInput.value.trim().length === 0) {
        showError(subjectInput, "error-subject", "Please enter a subject.");
        hasError = true;
      } else {
        clearError(subjectInput, "error-subject");
      }

      // Message validation
      const messageValue = messageInput.value.trim();
      if (messageValue.length < 10) {
        showError(
          messageInput,
          "error-message",
          "Your message must be at least 10 characters long."
        );
        hasError = true;
      } else {
        clearError(messageInput, "error-message");
      }

      // Handle result
      if (hasError) {
        successMessage.textContent = "";
        successMessage.classList.remove("success-message");
        successMessage.removeAttribute("role");
        successMessage.removeAttribute("aria-live");
        return;
      }

      // On successful validation
      successMessage.textContent =
        "Thank you for contacting us! We will respond shortly.";
      successMessage.classList.add("success-message");
      successMessage.setAttribute("role", "status");
      successMessage.setAttribute("aria-live", "polite");

      form.reset();
    });
  }
});
