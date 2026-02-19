# Practical lesson pz-SOLID  
# Практична реалізація SOLID принципів  

> У цьому занятті студенти отримують практичні навички застосування SOLID принципів під час рефакторингу існуючого коду.  
> Мета — створити гнучку, масштабовану та чисту архітектуру шляхом застосування SRP, OCP, LSP, ISP та DIP.

---

## What need to do:
* Провести аналіз вихідного «анти-SOLID» коду  
* Визначити порушення кожного SOLID принципу  
* Виконати рефакторинг згідно з:
  * SRP — Single Responsibility Principle  
  * OCP — Open/Closed Principle  
  * LSP — Liskov Substitution Principle  
  * ISP — Interface Segregation Principle  
  * DIP — Dependency Inversion Principle  
* Створити відповідні інтерфейси й абстракції  
* Усунути зайві або циклічні залежності  
* Додати мінімальний набір unit-тестів після рефакторингу  

---

## Acceptance criteria
* Реалізація на мові Typescript 
* Студент розуміє кожен SOLID принцип та пояснює його застосування  
* Увесь вихідний код проаналізовано  
* Усі порушення SOLID знайдено та описано  
* Після рефакторингу:
  * Кожен клас має одну відповідальність (SRP)  
  * Код розширюється через нові класи, а не редагування існуючих (OCP)  
  * Класи-нащадки повністю заміщають базові (LSP)  
  * Інтерфейси невеликі й специфічні (ISP)  
  * Залежності реалізовані через абстракції (DIP)  
* Код структурований, логічний та зрозумілий  
* Усі тести проходять успішно  
* Звіт оформлений у Markdown (README.md)

## Directory Structure
```
├── pz-SOLID
│   ├── src
│   │   ├── original          # код із навмисними порушеннями SOLID
│   │   ├── refactored        # код після рефакторингу
│   │   ├── interfaces        # абстракції та інтерфейси
│   ├── tests
│   │   ├── refactored.spec.js
│   ├── .editorconfig
│   ├── .gitignore
│   ├── jest.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
└──
```

## Useful links

[SOLID Principles Explained](https://www.baeldung.com/solid-principles)

[SOLID: The First 5 Principles of Object-Oriented Design](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)

[JavaScript SOLID: Реалізація принципів](https://khalilstemmler.com/articles/solid-principles/)

[Clean Code Concepts Adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

[Dependency Injection in JavaScript](https://javascript.plainenglish.io/dependency-injection-in-javascript-1b82a8101c1a)




