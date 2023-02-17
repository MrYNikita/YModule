# YModules

[![npm version](https://img.shields.io/npm/v/ymodules.svg)](https://npmjs.org/package/ymodules)
[![GitHub license](https://img.shields.io/badge/license-Apache_2.0-darkblue.svg)](https://github.com/MrYNikita/YModules)
[![npm downloads](https://img.shields.io/npm/dm/ymodules.svg)](https://npmjs.org/package/ymodules)

***
**YModules** - это совокупность функций и классов, предоставляющих частоиспользуемые и оптимизированные процедуры и структуры данных.

***
## Основные преимущества:
- Отсутсвие сторонних зависимостей.
- Регулярная оптимизация алгоритмов.
- Устранение необходимости в повторном написании однотипного кода, используемого в разных проектах.
***
## Содержание
1. Теория
    1. Версионная расшифровка
    2. Правила
       1. От меньшего к большему
       2. Z,Y,X
       3. Приоритет последнего указания
       4. Null и undefined
       5. Минимизация
          1. Через обобщения
    3. Паттерны
       1. Объекты-носители аргументов
       2. Типы.
          1. TB.
       3. ФЦ. Функциональные цепочки
          1. ADVHC
          2. BDVHC
       4. КЦ. Классовые цепочки
          1. SDFY
          2. SDIMFY
2. Модули
   1. OS
      1. Path
      2. File
      3. Directory
   2. Date
   3. Test
   4. Ject
      1. YLog
      2. YRept
      3. YJect
         1. YTerminal
      4. YList
         1. YCursor
      5. YBasic
   5. Func
      1. YFunc
   6. Array
      1. YArray
      2. YArrayRank
      3. YArrayLevel
   7. String
      1. YScaner
      2. YString
      3. YStylist
   8. Number
      1. YNN
      2. YRange
      3. YNumber
   9.  RegExp
      1. YRegExp
   10. Web
      1. HTML
         1. YHTML
         2. Style
            1. YStyle
            2. YStyleSet
         3. Element
            1. YElement
            2. YElementStyle
      2. YServer
         1. YAPI
            1. YRout
      3. YClient
3. Изменения
   1. Удаления
   2. Улучшения
   3. Добавления
   4. Исправления
4. Комментарий
5. Планы

***
## Теория
### Версионная расшифровка
Версия задана форматом z.y.x, где z - номер версии проекта, y - номер обновления и x - номер правки. Версия обозначает изменение всего проекта, его концепций. Номер обновления указывает на добавление в указанную версию какого-то нового функционала. Правки описывают оптимазационные патчи и изменения функционала.
***
### Приёмы
#### Умное заполнение
Это приём классов SDFY, который позволяет заполнить объект с помощью D звена. Данное звено содержит все свойства, необходимые для заполнения экземпляра класса, без необходимости указывать каждое отдельное свойство.

Данный приём реализован за счет функциональной цепочки jectAdopt.


#### Глубокое взаимодействие
Это приём, который позволяет работать с объектом и всеми его свойствами без уровней вложенности, позволяя менять или получать доступ к свойствам вложенных объектов через основной.

Данный приём реализован за счет функциональных цепочек jectChange, jectGet, JectSet, jectSupplement.

***
### Паттерны
#### Объект носитель аргументов
**Объект носитель аргументов** - это объект, свойства которого являются аргументами для функций. Данные объекты обозначаются как t (transmit). Пример:

```js

    function test(t) { ... };
```


Для данных объектов с помощью JSDoc создается тип, используя который могут быть обозначены ожидаемые свойства.

```js

    /**
     * @typedef t1
     * @prop {string} str Текстовое свойство.
     * @prop {number} num Числовое свойсвто.
    */
```


Для тех случаев, когда один объект носитель поолностью содержит свойства другого типа носителя аргументов, но имеет собственные уникальные свойства, следует использовать паттерн TB. Данный паттерн реализуется за счет создания промежуточного типа before, который содержит уникальные свойства и итогового типа, которые является совокупностью наследуемого и промежуточного типа.

```js

    /**
     * @typedef t1
     * @prop {string} str Текстовое свойство.
     * @prop {number} num Числовое свойсвто.
    */

    /**
     * @typedef tb2
     * @prop {boolean} boo Логическое свойство.
     * @typedef {t1&tb2} t2
    */
```


Далее необходимо использовать данный тип.

```js

    /**
     * ...
     * @arg {t2} t
    */
    function test(t) { ... };
```


Данный объект носитель аргументов используется в функциональных цепочках, где один единственный объект передается аргументом для всех функций, вызванных по цепочке.

***
#### Type

- TB
    TB - (transmit before) - это паттерн создания JSDoc типов. С помощью данного паттерна создаются типы, определяющие вид объектов носителей аргументов и правила их формирования. Созданные типы используются в основном для создания ожидаемого объекта.

    Паттерн TB выделяет свойства типов называемые избыточными - это такие свойства, которые могли быть обретены в следствии совокупности.
    > Предупреждение! Использование этого паттерна требует оптимального создания типов. Это означает, что создаваемые типы должны не должны содержать избыточные свойства.

    > Уточнение! Для того, чтобы устранить избыточные свойства следует создвавать промежуточные типы, используемые исключительно для перечисления необходимых свойств.

***
#### Function
1. Функциональные цепочки
Функциональные цепочки - это функция отдельные логические части которой, преобразованны в совокупность последовательно выполняемых функций, представленных цепочкой вызов. Каждый отдельный вызов функции в цепи называется звеном. Каждое отдельное звено выпролняет свою логическую часть. Результат всех вызовов возвращается в изначальное звено вызова.

**Преимущетсва**:
- Вынесение логики.
- Упрощенная навигация.

Для расмотрения предлагаются варианты функиональных цепочек.

**Виды**:
1. DVHC
    *Deceit Verify Handle Comply* - Это вариант функциональной цепочки, который включает в себя этапы: отлова, проверки, обработки, исполнения. В качестве аргумента любая функциональная цепочка DVHC принимает объект-носитель аргументов. Каждое звено цепи возвращает значение вызова последующего звена. Последнее звено цепи C исполняет основную заложенную логику и возвращает итоговое значение. Предполагается, что каждое звено цепи представлено в единственном экземпляре.

    D - (Deceit) - этап отлова. Данное звено оборачивает все последующие звенья в единый блок отлова исключительных ситуаций. В случае исключительной ситуации, данное звено либо прервет исполнение программы вызовом ошибки, либо вернет определенное автором исключительное значение.
    V - (Verify) - этап проверки. Данное звено осуществляет проверку объекта-носителя аргументов. Если объект носитель аргументов содержит ошибочные свойства, то данное звено вернет определенную для проверки исключительную ситуацию.
    H - (Handle) - этап обработки аргументов. Данное звено осуществляет обработку объекта-носителя аргументов, если они соответсвуют условиям обработки.
    C - (Comply) - этап исполнения. Данное звено осуществляет исполнение основной логики функциональной цепочки.

    1. ADVHC
        *Aggregate's Deceit Verify Handle Comply* - это модификация функциональной цепочки DVHC, которая включает в себя звенья-дистрибьюторы. Каждое из данных звений может быть начальным.

        Все данные звенья предназначены для обращения к звену D и каждое из них обладает уникальным набором аргументов. Аргументы данных звеньев могут быть отличными от объекта-носителя аргументов - это сделано для удобства обращения к функциям, чьё кол-во аргументов мало и может быть сведено к последовательности. Однако логика своих звеньев подразумевает обращение к D, что требует в логике каждого такого звена приводить все перечисленные аргументы к объекту-носителю аргументов.

        Каждое такое звено должно обладать своей документацией с указанием типа для каждого параметра. В документации к функции можно опустить указание @return в тех случаях когда функция всегда возвращает единственное значение. Исключением могут быть те звенья, логика которых заключается в возвращении одного элемента, несмотря на то, что C звено возвращает массив элементов. В противном случае не рекомендуется указывать значения отличные от значения звена C.

        > Предупреждение! При указании @return в документации к звену-дистрибьютору следует указывать значение исключительной ситуации, если такое указано в звене D.

    1. BDVHC
        *Before Deceit Verify Handle Comply* - это функциональная цепочка, которая включает в себя звено-предъобработки. Такое звено является начальным и единственным.

        Звенья-предобработчики предназначены для приведения последовательнсоти аргументов к форме объекта носителя аргументов. Их логика изучает последовательность и на основе заложенной в звено логики формирует объект-носитель аргументов, который в дальнейшем проходит стандартную цепочку DVHC.

        Данные функциональные цепочки используются в классах, чтобы имитировать переопределение конструктора. В такой реализации, звено не вызывает следующих элементов цепи. Вместо этого звено возвращает объект-носитель аргументов.

        По сути BDVHC является точной копией ADVHC

        > Уточнение! B не вызывает последующие элементы функциональной цепи. Это связано с тем, что констурктор вынужден вызывать метод super, который может быть вызван только в его теле. Всвязи с этим вызов из звена невозможен. Если бы B продолжал цепь до вызова C, то звено C изменило бы this до объявления конструктора.
***
#### Classes
1. Классовые цепочки
    Классовые цепочки - это последовательности классов, которые разделены на логические звенья. Каждое звено ответсвтенно за собственную логику.
    > Пример! Вся статика вынесена в специальное статическое звено. Таким образом вся статика сконцентрирована в единтсвенном классе.

**Преимущества**
- Вынесение логики.
- Упрощенная навигация.

**Виды**
1. SDFY
*Static Data Fill Y* - Это вариант классовых цепочек, при котором создается последовательность классовых звеньев SDFY. Данный паттерн подразумевает наличие в цепи едиснтвенного конструктора. Внутри конструктора используется функциональная цепочка BDVHC - это даёт возможность передавать в конструктор итогового класса как объект-носитель аргментов, так и последовательность аргментов.
> Предупреждение! Рекомендуется использовать вариант с объетками-носителями аргументов. Данный вариант предпочтителен, так как позволяет пользователям использовать intellisense.

***
## Модули

### OS
- ID: 1

#### Описание
Модуль OS предназначен для взаимодействия с операционной системой.

#### Преимущества
- Контроль GUI элементов.
- Запуск и управление сторонними программами.
- Взаимодействие с файлами на объектном уровне.
- Быстрое получение файлов проекта по их уникальным фрагментам пути.

#### Вложенные модули:
1. dir
1. file
1. path
1. program

***
## Изменения
- Удаления
- Улучшения
- Добавления
- Перемещения
- Исправления
***
## Комментарий

### Модуль class
Новый модуль среди YModules предназначенный для работы с классами. Данный модуль не полон функционалом, но ожидается, что он сможет привнести свою пользу и разростись функционалом.

### classUnion
Функция, которая поможет получить новый класс на основе двух указанных. Данный образующий класс не только получится корректным и работоспособным, но и сможет учитываться intellisence'ом. Помимо прочего, класс можно назвать, если передать его имя 3 параметром.

## Планы
- [ ] Модификация path.
    - [ ] Добавление ФЦ прокладки относительного пути от файла до файла.
    - [ ] Добавление класса строк|метода|формы записи правил путей (возможно фрагментов поиска) для оптимизации поиска и более гибких правил нахождения подходящих путей.
- [ ] Модификация YFile.
    - [ ] Статика.
    - [ ] Асинхронность.
- [ ] Модификация YNotice.
    - [ ] Группы уведомлений.
- [ ] Создание модуля os.stream.
- [ ] Создание вложенного модуля log.YLog.
- [ ] Создание вложенного модуля web.html.plot.
- [ ] Создание вложенного модуля web.html.fetch.
- [ ] Модификация YServer
    - [ ] Система ролей
    - [ ] Генерация паролей
    - [ ] Система регестрации
- [ ] Создание вложенного модуля web.html.animation.
- [ ] Доработка документации.
    - [ ] Привести разбор модулей.
    - [ ] Привести примеры использования.
- [ ] Внедрение строки условия объекта носителя аргумента.
- [ ] Асинхронная архитектура построенная на дочерних процессах.