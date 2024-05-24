document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('input[name="image"]');
    const largeImage = document.getElementById('largeImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('change', event => {
            largeImage.src = event.target.value;
        });
    });
});