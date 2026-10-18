const openRegister = document.getElementById("openRegister");
const closeRegister = document.getElementById("closeRegister");
const registerModal = document.getElementById("registerModal");

function openModal() {
    registerModal.style.display = "flex";
}

function closeModal() {
    registerModal.style.display = "none";
}

openRegister.addEventListener("click", openModal);
closeRegister.addEventListener("click", closeModal);

// for the blurred background
registerModal.addEventListener("click", function (event) {
    if (event.target === registerModal) {
        closeModal();
    }
});

// esc to close
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
