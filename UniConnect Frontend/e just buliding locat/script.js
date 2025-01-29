const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const currentPageElement = document.querySelector('.current-page');
const totalPagesElement = document.querySelector('.total-pages');
const imageGallery = document.querySelector('.image-gallery');

let currentPage = 1;
const totalPages = 3; 
const imagesPerPage = 3;

totalPagesElement.textContent = totalPages;

function updateGallery() {
    const offset = (currentPage - 1) * imagesPerPage;
    const images = imageGallery.querySelectorAll('.image-container');

    images.forEach((image, index) => {
        if (index >= offset && index < offset + imagesPerPage) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    currentPageElement.textContent = currentPage;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateGallery();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateGallery();
    }
});

// Initial display
updateGallery();