const openBtn = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal__overlay');
const closeBtn = modal.querySelector('button');
const openModal = () => {
    modal.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
}
openBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);