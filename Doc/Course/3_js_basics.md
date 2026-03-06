# 03. Основи на JavaScript

## Какво е JavaScript?
JavaScript е език за програмиране, който позволява да добавяш динамика и интерактивност към уеб страниците.

## Как се добавя към HTML?
- В `<script>` таг в края на `<body>` или в `<head>` (препоръчва се в `<body>`)
- Външен файл (например script.js)

## Основни концепции
- Променливи: let, const, var
- Типове данни: числа, текст, масиви, обекти
- Функции: блокове код, които се изпълняват при нужда
- Събития: onclick, oninput и др.
- DOM манипулация: промяна на HTML чрез JavaScript

## Пример
```html
<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <title>JS пример</title>
</head>
<body>
  <button id="myBtn">Натисни ме</button>
  <div id="output"></div>
  <script>
    const btn = document.getElementById('myBtn');
    const output = document.getElementById('output');
    btn.addEventListener('click', function() {
      output.innerHTML = 'Бутонът беше натиснат!';
    });
  </script>
</body>
</html>
```

## Задача
Създай HTML файл с бутон, който при натискане показва съобщение в нов елемент.

## Проверка
Каква е ролята на addEventListener?

## Допълнителни ресурси
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — официална документация и уроци за JavaScript.
- [freeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/) — интерактивни уроци и упражнения по JavaScript.
- [w3schools JavaScript Tutorial](https://www.w3schools.com/js/) — лесни за следване примери и обяснения.