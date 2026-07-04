// Project JavaScript for the Unofficial Disability Guide.
// Kept intentionally small for accessibility and maintainability.

document.addEventListener("DOMContentLoaded", () => {
  // Mark same-page contents links as internal guide links for assistive technologies.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.setAttribute("data-guide-link", "true");
  });
});
