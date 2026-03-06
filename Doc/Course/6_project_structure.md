# 06. Работа с файлове и структура на проект
## Защо не е добре всичко да е в един файл?
Когато пишеш целия код (HTML, CSS, JS) в един файл, проектът става труден за поддръжка и развитие. Ако сайтът расте, ще ти е трудно да намираш и редактираш отделни части. Изнасянето на CSS и JS във външни файлове прави кода по-ясен, лесен за повторно използване и по-бърз за зареждане.

## Как се изнася CSS и JS?
1. Създай отделен файл за стилове (например styles/main.css)
2. Създай отделен файл за скриптове (например scripts/app.js)
3. Свържи тези файлове към твоя HTML:
	 - За CSS: `<link rel="stylesheet" href="styles/main.css">` в `<head>`
	 - За JS: `<script src="scripts/app.js"></script>` преди края на `<body>`

## Как се свързват външни файлове?
В HTML използваш специални тагове:
- `<link>` за CSS
- `<script src="..."></script>` за JS
Пример:
```html
<head>
	<link rel="stylesheet" href="styles/main.css">
</head>
<body>
	...
	<script src="scripts/app.js"></script>
</body>
```

## Какво е структура на проект?
Структурата на проект означава как са организирани файловете и папките в един уеб проект. Добрата структура улеснява работата, поддръжката и развитието на сайта.

## Основни правила за структура
- Всеки тип файл има собствена папка (HTML, CSS, JS, изображения)
- Имената на файловете са ясни и описателни
- Използвай папки като `assets`, `components`, `styles`, `scripts`

## Примерна структура:
```
my-web-project/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
├── assets/
│   └── logo.png
├── components/
│   └── userCard.html
```

## Нови тагове и концепции
- `<link>`: свързва външен CSS файл
- `<script src="..."></script>`: свързва външен JS файл
- Папки и файлове: организирай ги според съдържанието

## Задача
Създай структура на проект с отделни папки за стилове, скриптове и компоненти. Свържи външен CSS и JS файл към твоя HTML.

## Проверка
Защо е важно да имаш добра структура на проект?

## Допълнителни ресурси
- [MDN Organizing Files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files) — обяснение за организация на файлове.
- [freeCodeCamp Project Structure](https://www.freecodecamp.org/news/how-to-structure-your-html-css-and-javascript-projects/) — съвети за структура.
- [w3schools HTML file paths](https://www.w3schools.com/html/html_filepaths.asp) — как се използват пътища към файлове.