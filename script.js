const button = document.getElementById("cta-button");
const message = document.getElementById("success-message");

button.addEventListener("click", function() {
    message.classList.remove("hidden");
});
