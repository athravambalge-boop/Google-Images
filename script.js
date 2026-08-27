document.querySelectorAll('.photo img').forEach((image) => {
  image.addEventListener('error', () => image.classList.add('is-missing'));
});

document.querySelector('#year').textContent = new Date().getFullYear();
