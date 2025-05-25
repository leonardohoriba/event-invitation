function playaudio() {
  const audio = document.querySelector("#audio");
  audio.play();
}

function removeModal() {
  const modal = document.querySelector(".inicio");
  modal.classList.add("oculto");
  const ativo = document.querySelector(".container_envelope");
  ativo.classList.add("ativo");
}

document.querySelectorAll(".anime").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const target = event.target.closest("a").getAttribute("data-target");
    const modal = document.getElementById(`modal-${target}`);

    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Fechar o modal quando clicar no 'X'
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
  });
});

// Fechar o modal quando clicar fora dele
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
