const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('modal-close');
const galleryItems = document.querySelectorAll('.gallery-item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;
const images = Array.from(galleryItems);

function openModal(index) {
  modal.style.display = 'flex';
  modalImg.src = images[index].src;
  modalImg.alt = images[index].alt;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = 'none';
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openModal(i));
});

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalImg) closeModal();
});