[![Netlify Status](https://api.netlify.com/api/v1/badges/50581d8a-fe2c-4f7a-a375-b48f4ab7b94c/deploy-status)](https://app.netlify.com/sites/hungry-engelbart-fca6d8/deploys)
[![CI](https://github.com/rustshubkinn/react-todo-app/actions/workflows/CI.yml/badge.svg)](https://github.com/rustshubkinn/react-pizza/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/076ee2b35aa22eb70037/maintainability)](https://codeclimate.com/github/rustshubkinn/react-pizza/maintainability)

# React Pizza App - веб-приложение, в котором можно заказать пиццу.

_Для локального запуска проекта:_

```
$ npm install
$ npm start
```

## Реализация проекта

React Pizza является веб-приложением для онлайн заказа пицц. Магазин имплементирован с помощью ReactJS и Redux. Базой данных для хранения пицц используется Google Firebase. Для маршрутизации использован React Router. Дизайн приложения был найден в интернете.
Приложение React Pizza имеет две страницы: домашнюю и страницу заказа.

## Домашняя страница

На домашней странице представлен ассортимент пицц, получаемый из базы данных. У каждой пиццы есть доступные, или недоступные для заказа опции теста и размеры пиццы. Также на домашней странице доступна фильтрация по типу пиццы и сортировка по популярности, цене и алфавиту.

## Страница заказа

На странице заказа представлены добавленные в корзину пиццы. Доступны операции увеличения или уменьшения количества пиццы, удаления одной пиццы из заказа и полная очистка корзины.

# Links

- [Live Project](https://hungry-engelbart-fca6d8.netlify.app/)
- [Ссылка на макет в Figma](https://www.figma.com/file/wWUnQwvRDWBfPx1v1pCAfO/React-Pizza?node-id=8%3A9)
