# 02. Основи на CSS

## Какво е CSS?
CSS (Cascading Style Sheets) е език за стилизиране на HTML елементи – определя цветове, размери, разположение и други визуални свойства.

## Как се свързва с HTML?
Можеш да добавиш CSS:
- В `<style>` таг в `<head>`
- Външен файл (например style.css)
- Като inline стил (style="...")

## Основни свойства
- color: цвят на текста
- background-color: фон
- width, height: размери
- margin, padding: разстояния

## Класове и ID
- Клас: .my-class { ... }
- ID: #my-id { ... }

## Flexbox и Grid
Flexbox и Grid са модерни методи за подредба на елементи:
- Flexbox: лесно подреждане по ред или колона
- Grid: двуизмерна подредба

## Пример
```html
<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <title>CSS пример</title>
  <style>
    .box {
      background: #3498db;
      color: white;
      padding: 20px;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>
  <div class="box">Това е стилизиран елемент</div>
</body>
</html>
```

## Задача
Създай HTML файл с поне два елемента, които стилизираш с клас и Flexbox.

## Проверка
Каква е разликата между margin и padding?

## Допълнителни ресурси
- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) — официална документация и уроци за CSS.
- [freeCodeCamp CSS Course](https://www.freecodecamp.org/learn/) — интерактивни уроци и упражнения по CSS.
- [w3schools CSS Tutorial](https://www.w3schools.com/css/) — лесни за следване примери и обяснения.