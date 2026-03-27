const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));

/* ===== MODAL ===== */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");

function openModal(img) {
  modal.classList.add("active");
  modalImg.src = img.src;

  const text = img.parentElement.querySelector("p").innerText;
  modalText.innerText = text;
}

function closeModal() {
  modal.classList.remove("active");
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

/* ===== CLICK EN LOGO → VOLVER AL INICIO ===== */
document.querySelector('.logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});