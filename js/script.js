
showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = '';
    }
}

  document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');
    const hero = document.getElementById('home-page');

    main.addEventListener('scroll', function () {
      const scrollPos = main.scrollTop;
      const heroHeight = hero.offsetHeight;

      if (scrollPos < heroHeight - 100) {
        navbar.classList.add('hidden');
        footer.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
        footer.classList.remove('hidden');
      }
    });

    // Jalankan saat pertama kali biar navbar/footernya langsung ilang kalo di hero
    main.dispatchEvent(new Event('scroll'));
  });