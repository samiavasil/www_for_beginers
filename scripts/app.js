// Навигация и динамични вюта
const mainContent = document.getElementById('main-content');
function showHome() {
    mainContent.innerHTML = '<h1>Добре дошли!</h1><p>Това е централното съдържание.</p>';
}
function showForm() {
    mainContent.innerHTML = `
        <h2>Формуляр</h2>
        <form id="myForm" style="margin-top:30px;">
            <input type="text" id="name" placeholder="Име" required>
            <button type="submit">Изпрати</button>
        </form>
        <div id="result"></div>
    `;
    const form = document.getElementById('myForm');
    const result = document.getElementById('result');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            if(name.length < 2) {
                result.innerHTML = 'Името трябва да е поне 2 символа!';
            } else {
                result.innerHTML = 'Успешно изпратено: ' + name;
            }
        });
    }
}
function showProfile() {
    mainContent.innerHTML = `
        <section class="userCard">
            <h2>Потребител</h2>
            <p>Име: Иван</p>
            <button onclick="alert('Профилът на Иван')">Покажи профил</button>
        </section>
    `;
}
function showMsg() {
    mainContent.innerHTML = '<h2>Съобщение</h2><p>Това е динамично съдържание, показано с JavaScript.</p>';
}
document.getElementById('nav-home').addEventListener('click', function(e) { e.preventDefault(); showHome(); });
document.getElementById('nav-form').addEventListener('click', function(e) { e.preventDefault(); showForm(); });
document.getElementById('nav-profile').addEventListener('click', function(e) { e.preventDefault(); showProfile(); });
document.getElementById('nav-msg').addEventListener('click', function(e) { e.preventDefault(); showMsg(); });
showHome();
