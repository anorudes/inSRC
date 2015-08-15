# inSRC
Небольшое angular nw.js приложение для хранения фрагментов кода и ссылок.

## Описание
Приложение стремится стать легким и удобным хранилищем заметок для разработчика без лишнего функционала :)

Отличия от evernote: заточен исключительно под программистов
Отличия от аналогов: памятные слова вместо тегов. Программа рассчитана на более частое использование.

Разработка ведется в свободное время при желании.

![](http://anorudes.github.io/inSRC/img.png)

Приложение разрабатывается под методологию "памятных ключевых слов" вместо тегов, которая позволяет аккумулировать опыт программирования.

Суть данного подхода проще объяснить на примерах ниже:

**Сохранение кода:**
Представим, что решена некая задача с использованием нескольких библиотек. Теперь можно добавить замектку и указать в keywords все слова, которые, скорее всего, в последствие использовались бы при поиске в гугле.
Слова могут быть на разных языках, иметь синонимы или же выглядеть глупо при простом чтение в отрыве от контекста, это не имеет значение. Главная цель ключевых слов: легко получить данную информацию в будущем.

Например, "react for loop repeat map each цикл обход". В коде данной заметки будет стандартный обход массива в React при рендере.

В будущем это можно будет легко вспомнить нажав определенный хоткей, быстро введя "react for" или "react map", "react repeat" и т.д.

**Для обучения:**
Во время изучения какой-нибудь новой библиотеки или фреймворка можно быстро сохранять все практические примеры таким же способом и в будущем доставать по ключевым памятным словам.
Это сильно упрощает порог вхождения.

**Ссылки:**
Ссылки на онлайн-сервисы и статьи можно также легко сохранять в заметки тем же способом.

## Установка
```
npm install
jspm install
cd client
bower install
```

## Запуск (как сайт)
```
gulp
http://localhost:3000/
```

## Запуск (как приложение)
```
gulp --nw
```

## Собрать приложение (windows)
```
gulp build
```

## ToDo
1. [x] Запуск как приложение nw.js
2. [x] Запуск как сайт (для тестирование, в будущем будет удалено)
3. [x] Добавление, редактирование, удаление, список
4. [x] Поиск по заголовку, ключевым словам
5. [x] Подсветка кода
6. [x] Поддержка ссылок и жирного текста
7. [x] Сохранение фильтров и позиции
8. [x] Глобальные хоткеи для аппа nw.js, добавление, поиск. Автофокус на нужных полях
9. [x] Трей, меню для аппа nw.js
10. [X] Страница настроек
11. [X] Смена темы подсветки кода
12. [X] Добавление без заполнения
13. [X] Автоформатирование (опция)
14. [X] Смена скина
15. [X] Синий скин
16. [X] Build таск
17. [X] Лимит показа
18. [X] Белый скин

