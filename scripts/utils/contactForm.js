async function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const firstNameField = document.getElementById("first");
const lastNameField = document.getElementById("last");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const submitFormButton = document.getElementById("submitFormButton");

const contactForm = document.getElementById("contact-me-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function getFieldsValue() {
    console.log("Prenom : " + firstNameField.value);
    console.log("Nom : " + lastNameField.value);
    console.log("Email : " + emailField.value);
    console.log("Message : " + messageField.value);
}

function validateForm() {
    getFieldsValue();
    closeModal();
}
submitFormButton.addEventListener('click', validateForm)