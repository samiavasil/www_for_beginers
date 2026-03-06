# 04. Интерактивност и автоматизация
## Нови HTML тагове в тази стъпка

### `<form>`
Тагът `<form>` създава формуляр за въвеждане и изпращане на данни. Формулярите са основен начин за интеракция между потребителя и сайта.

### `<input>`
Тагът `<input>` създава поле за въвеждане на текст, числа, пароли и др. В примера използваме `type="text"` за въвеждане на име.

### `<button>`
Тагът `<button>` създава бутон, който може да изпраща формуляра или да изпълнява действие чрез JavaScript.

Тези тагове работят заедно: `<form>` съдържа `<input>` и `<button>`. Когато бутонът се натисне, формулярът се изпраща.

## Как се обвързват с JavaScript?
JavaScript позволява да обработваш събитията от формуляра (например submit), да валидираш данните и да показваш резултати динамично. В примера използваме addEventListener за обработка на submit и e.preventDefault() за спиране на стандартното поведение.

## Линк към списък със стандартни HTML тагове
- [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) — пълен списък и обяснения на всички стандартни HTML тагове.

## Какво е интерактивност?
Интерактивността означава сайтът да реагира на действията на потребителя – например при въвеждане на данни, натискане на бутон или движение на мишката.

## Примери за интерактивност:
- Формуляри за въвеждане на информация
- Модални прозорци (изскачащи съобщения)
- Динамични менюта, които се променят при клик

## Как се реализира?
- С JavaScript: добавяш обработка на събития (onclick, oninput и др.)
- С CSS: можеш да показваш/скриваш елементи чрез класове

## Пример: Динамично меню
```html
<nav>
  <button id="toggleMenu">Покажи меню</button>
  <ul id="menu" style="display:none;">
    <li>Начало</li>
    <li>За нас</li>
    <li>Контакти</li>
  </ul>
</nav>
<script>
  const btn = document.getElementById('toggleMenu');
  const menu = document.getElementById('menu');
  btn.addEventListener('click', function() {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });
</script>
```

## Задача
Създай HTML страница с бутон, който показва и скрива меню или съобщение.

## Проверка
Какво прави event listener и защо е важен?

## Допълнителни ресурси
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) — списък и обяснения на събитията в браузъра.
- [freeCodeCamp JavaScript Interactivity](https://www.freecodecamp.org/learn/) — упражнения за интерактивност.
- [w3schools JavaScript Events](https://www.w3schools.com/js/js_events.asp) — примери за събития и обработка.
# 04. Интерактивност и автоматизация

## Формуляри и валидиране
Формулярите позволяват на потребителя да въвежда данни. Валидирането гарантира, че данните са коректни.

## Модални прозорци и динамични менюта
Модалните прозорци са изскачащи елементи за съобщения или форми. Динамичните менюта се променят според действията на потребителя.

## Пример: Формуляр с валидиране
```html
<form id="myForm">
  <input type="text" id="name" placeholder="Име" required>
  <button type="submit">Изпрати</button>
</form>
<div id="result"></div>
<script>
  const form = document.getElementById('myForm');
  const result = document.getElementById('result');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    if(name.length < 2) {
      result.innerHTML = 'Името трябва да е поне 2 символа!';
    } else {
      result.innerHTML = 'Успешно изпратено: ' + name;
    }
  });
</script>
```

## Задача
Създай HTML файл с формуляр, който валидира въведеното име и показва съобщение.

## Проверка
Какво прави e.preventDefault()?

## Допълнителни ресурси
- [MDN Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms) — официална документация и уроци за формуляри.
- [freeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/) — интерактивни уроци и упражнения по автоматизация.
- [w3schools Form Tutorial](https://www.w3schools.com/html/html_forms.asp) — лесни за следване примери и обяснения.