// js/script.js

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
      const aboutUser = document.getElementById("about-user");
      if (aboutUser) aboutUser.innerText = userName;
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

let globalUserName = '';

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
    globalUserName = userName;
    localStorage.setItem("userName", userName);

    const greeting = getGreeting();
    document.getElementById("welcome-user").innerText = `${userName}, ${greeting}`;
    const aboutUser = document.getElementById("about-user");
    if (aboutUser) aboutUser.innerText = userName;

    document.getElementById("nameModal").classList.add("hidden");
  }
}

function submitMessage() {
  const message = document.getElementById('message-input').value.trim();
  const messageOutput = document.getElementById('message-output');

  if (!globalUserName || message === '') {
    alert("Pesan kosong atau belum isi nama yaa 😢");
    return;
  }

  const now = new Date();
  const dateString = now.toLocaleString('id-ID', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const messageData = {
    userName: globalUserName,
    message: message,
    date: dateString
  };

  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(messageData);
  localStorage.setItem('messages', JSON.stringify(messages));

  const messageBox = document.createElement('div');
  messageBox.classList.add('border', 'p-2', 'rounded', 'bg-stone-900', 'mb-2');
  messageBox.innerHTML = `
    <p class="text-sm text-neutral-50 font-semibold">${globalUserName} <span class="text-neutral-500 text-xs">(${dateString})</span></p>
    <p class="text-neutral-200">${message}</p>
  `;

  messageOutput.appendChild(messageBox);
  messageOutput.scrollTop = messageOutput.scrollHeight;

  document.getElementById('message-input').value = '';
}

function loadMessages() {
  const messageOutput = document.getElementById('message-output');
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  messageOutput.innerHTML = '';

  messages.forEach((msg) => {
    const messageBox = document.createElement('div');
    messageBox.classList.add('border', 'p-2', 'rounded', 'bg-stone-900', 'mb-2');
    messageBox.innerHTML = `
      <p class="text-sm text-neutral-50 font-semibold">${msg.userName} <span class="text-neutral-500 text-xs">(${msg.date})</span></p>
      <p class="text-neutral-200">${msg.message}</p>
    `;
    messageOutput.appendChild(messageBox);
  });

  messageOutput.scrollTop = messageOutput.scrollHeight;
}


function logout() {

  localStorage.removeItem('userName');

  globalUserName = '';

  document.getElementById("welcome-user").innerText = '[User]';
  const aboutUser = document.getElementById("about-user");
  if (aboutUser) aboutUser.innerText = '[User]';
  document.getElementById("modal-name-input").value = '';
  document.getElementById("nameModal").classList.remove("hidden");


  loadMessages();


  const homePage = document.getElementById("home-page");
  homePage.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');
  const navbar = document.getElementById('navbar');
  const footer = document.getElementById('footer');
  const hero = document.getElementById('home-page');


  globalUserName = localStorage.getItem('userName') || '';
  if (globalUserName) {
    const greeting = getGreeting();
    document.getElementById("welcome-user").innerText = `${globalUserName}, ${greeting}`;
    const aboutUser = document.getElementById("about-user");
    if (aboutUser) aboutUser.innerText = globalUserName;
    document.getElementById("nameModal").classList.add("hidden");
  }

  loadMessages();

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