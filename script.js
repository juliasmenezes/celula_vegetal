//fazer o card girar ao ser clicado
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


//alert ao clicar em "Saiba mais"
const modal = document.getElementById("custom-modal");
const closeButton = document.querySelector(".close-button");
const saibaMaisBtn = document.querySelectorAll(".botao"); // seleciona botão

saibaMaisBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation(); // impede que o card gire
        modal.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

