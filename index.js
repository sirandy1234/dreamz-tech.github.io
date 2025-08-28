// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form with Formspree integration
const form = document.getElementById('contact-form');
if (form) {
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const spinner = submitBtn.querySelector('.spinner');
  const successMsg = document.querySelector('.form-message.success');
  const errorMsg = document.querySelector('.form-message.error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnText.style.display = 'none';
    spinner.style.display = 'inline-block';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      btnText.style.display = 'inline';
      spinner.style.display = 'none';

      if (response.ok) {
        successMsg.textContent = "Message sent successfully!";
        successMsg.style.display = "block";
        errorMsg.style.display = "none";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      errorMsg.textContent = "Oops! Something went wrong.";
      errorMsg.style.display = "block";
      successMsg.style.display = "none";
    }
  });
}