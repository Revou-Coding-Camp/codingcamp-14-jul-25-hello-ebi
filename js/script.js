
  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 4 && hour < 11) return "Selamat pagi";
    if (hour >= 11 && hour < 15) return "Selamat siang";
    if (hour >= 15 && hour < 18) return "Selamat sore";
    return "Selamat malam";
  }

  function submitName() {
    const input = document.getElementById("modal-name-input");
    const userName = input.value.trim();

    if (userName !== "") {
      const greeting = getGreeting();
      document.getElementById("welcome-user").innerText = `${userName}, ${greeting}`;
      document.getElementById("nameModal").classList.add("hidden");
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

    main.dispatchEvent(new Event('scroll'));
  });