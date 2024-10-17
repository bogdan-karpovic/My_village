const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal-img');
const galleryItems = document.querySelectorAll('.image');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth >= 1200) {
            modal.style.display = 'flex';
            modalImg.src = item.src;
            document.body.style.overflow = 'hidden';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

modalImg.addEventListener('click', (e) => {
    if (e.target === modalImg) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
