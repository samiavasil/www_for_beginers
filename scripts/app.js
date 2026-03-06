// Навигация и динамични вюта
const mainContent = document.getElementById('main-content');
let users = JSON.parse(localStorage.getItem('users') || '[]');

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}
function showHome() {
    mainContent.innerHTML = '<h1>Добре дошли!</h1><p>Това е централното съдържание.</p>';
}
function showForm() {
    mainContent.innerHTML = `
        <h2>Добави потребител</h2>
        <form id="myForm" style="margin-top:30px;">
            <input type="text" id="name" placeholder="Име" required>
            <button type="submit">Добави</button>
        </form>
        <div id="result"></div>
        <hr>
        <h3>Списък с потребители</h3>
        <ul id="userList"></ul>
    `;
    const form = document.getElementById('myForm');
    const result = document.getElementById('result');
    const userList = document.getElementById('userList');
    function renderUsers() {
        userList.innerHTML = users.map((u, i) => `<li>${u} <button data-i="${i}" class="delBtn">Изтрий</button></li>`).join('');
        document.querySelectorAll('.delBtn').forEach(btn => {
            btn.addEventListener('click', function() {
                users.splice(btn.dataset.i, 1);
                saveUsers();
                renderUsers();
            });
        });
    }
    renderUsers();
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            if(name.length < 2) {
                result.innerHTML = 'Името трябва да е поне 2 символа!';
            } else {
                users.push(name);
                saveUsers();
                result.innerHTML = 'Потребителят е добавен!';
                form.reset();
                renderUsers();
            }
        });
    }
}
function showProfile() {
    mainContent.innerHTML = `
        <h2>Профили</h2>
        <ul id="profileList"></ul>
    `;
    const profileList = document.getElementById('profileList');
    profileList.innerHTML = users.length ? users.map(u => `<li><section class="userCard"><img src="assets/bg.png" alt="avatar" class="userAvatar"><h3>${u}</h3><button onclick="alert('Профилът на ${u}')">Покажи профил</button></section></li>`).join('') : '<li>Няма добавени потребители.</li>';
}
function showMsg() {
    mainContent.innerHTML = '<h2>Съобщение</h2><p>Това е динамично съдържание, показано с JavaScript.</p>';
}
function showSettings() {
    mainContent.innerHTML = `
        <h2>Настройки</h2>
        <button id="clearUsers">Изчисти всички потребители</button>
    `;
    document.getElementById('clearUsers').addEventListener('click', function() {
        users = [];
        saveUsers();
        alert('Всички потребители са изчистени!');
    });
}
document.getElementById('nav-home').addEventListener('click', function(e) { e.preventDefault(); showHome(); });
document.getElementById('nav-form').addEventListener('click', function(e) { e.preventDefault(); showForm(); });
document.getElementById('nav-profile').addEventListener('click', function(e) { e.preventDefault(); showProfile(); });
document.getElementById('nav-msg').addEventListener('click', function(e) { e.preventDefault(); showMsg(); });
// Добавяме нови менюта динамично
const nav = document.querySelector('nav');
function addNavLink(id, text, handler) {
    if(!document.getElementById(id)) {
        const link = document.createElement('a');
        link.href = '#';
        link.id = id;
        link.textContent = text;
        nav.appendChild(link);
        link.addEventListener('click', function(e) { e.preventDefault(); handler(); });
    }
}
addNavLink('nav-settings', 'Настройки', showSettings);
addNavLink('nav-gallery', 'Галерия', showGallery);

function showGallery() {
    mainContent.innerHTML = `<h2>Галерия</h2><div style="display:flex; gap:16px; flex-wrap:wrap;" id="gallery"></div>`;
    const gallery = document.getElementById('gallery');
    fetch('/assets/')
        .then(res => res.text())
        .then(html => {
            // Парсваме HTML листа
            const temp = document.createElement('div');
            temp.innerHTML = html;
            // Търсим всички линкове към изображения
            const links = Array.from(temp.querySelectorAll('a'));
            links.forEach(link => {
                const href = link.getAttribute('href');
                if(href && href.match(/\.(jpg|jpeg|png|gif)$/i)) {
                    // Ако href започва със /, използвай директно
                    const src = href.startsWith('/') ? href : '/assets/' + href;
                    const el = document.createElement('img');
                    el.src = src;
                    el.alt = href;
                    el.style = 'width:200px;height:200px;border-radius:8px;object-fit:cover;';
                    gallery.appendChild(el);
                }
            });
        })
        .catch(() => {
            gallery.innerHTML = '<p>Не може да се зареди списък с изображения.</p>';
        });
}
showHome();
