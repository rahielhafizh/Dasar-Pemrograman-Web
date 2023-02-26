const instagramButton = document.getElementById('instagram');

// Fungsi untuk mengarahkan ke link Instagram ketika button diklik
function goToInstagram() {
  window.location.href = 'https://www.instagram.com/rahielhfz/';
}

// Tambahkan event listener untuk button dengan id "instagram"
instagramButton.addEventListener('click', () => {
  goToInstagram();
});

const nameElement = document.querySelector('.animation');

      // Fungsi untuk membuat elemen berkelap-kelip
      function blinkName() {
        // Tambahkan dan hapus class CSS "blink" dengan interval
        setInterval(() => {
          nameElement.classList.toggle('blink');
        }, 1000);
      }

      // Panggil fungsi untuk memulai animasi
      blinkName();