# 🎯 Course Goals Manager

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</div>

<p align="center">
  <strong>Elegancka aplikacja do zarządzania celami kursowymi stworzona w React + TypeScript</strong>
</p>

---

## 📋 Opis Projektu

Course Goals Manager to nowoczesna aplikacja webowa, która pozwala użytkownikom na:

- ✅ Dodawanie nowych celów kursowych z tytułem i opisem
- 📝 Przeglądanie listy wszystkich celów
- 🗑️ Usuwanie niepotrzebnych celów
- 🎨 Korzystanie z eleganckiego, responsywnego interfejsu

Aplikacja wykorzystuje najnowsze technologie frontendowe i jest w pełni typowana dzięki TypeScript.


## 🚀 Funkcjonalności

### ✨ Główne Features

- **Dodawanie celów**: Prosty formularz z walidacją
- **Zarządzanie listą**: Dynamiczna lista z możliwością usuwania
- **Responsywny design**: Działa na wszystkich urządzeniach
- **Type Safety**: Pełne wsparcie TypeScript

### 🎯 Kluczowe komponenty

- `Header` - Nagłówek z logo i tytułem
- `NewGoal` - Formularz dodawania nowych celów
- `CourseGoalList` - Lista wszystkich celów
- `CourseGoal` - Pojedynczy element celu

## 🛠️ Technologie

| Technologia      | Wersja | Zastosowanie            |
| ---------------- | ------ | ----------------------- |
| **React**        | 18.3.1 | Framework UI            |
| **TypeScript**   | 5.6.2  | Type Safety             |
| **Vite**         | 7.3.1  | Build Tool & Dev Server |
| **CSS3**         | -      | Styling & Layout        |
| **Google Fonts** | -      | Typography (Poppins)    |

## 📦 Instalacja i Uruchomienie

### Wymagania

- Node.js (v16 lub wyższa)
- npm lub yarn

### Kroki instalacji

1. **Sklonuj repozytorium**

```bash
git clone <repository-url>
cd 1react-ts-start-app
```

2. **Zainstaluj zależności**

```bash
npm install
```

3. **Uruchom serwer deweloperski**

```bash
npm run dev
```

4. **Otwórz w przeglądarce**

```
http://localhost:5173
```

## 📁 Struktura Projektu

```
src/
├── components/
│   ├── CourseGoal.tsx      # Komponent pojedynczego celu
│   ├── CourseGoalList.tsx  # Lista celów
│   ├── Header.tsx          # Nagłówek aplikacji
│   └── NewGoal.tsx         # Formularz dodawania celów
├── assets/
│   └── goals.jpg           # Obrazek dla nagłówka
├── App.tsx                 # Główny komponent aplikacji
├── main.tsx                # Punkt wejścia aplikacji
└── index.css               # Globalne style CSS
```


## 🤝 Rozwój Projektu

### Planowane funkcjonalności

- [ ] Edycja istniejących celów
- [ ] Kategoryzacja celów
- [ ] Local Storage persistence
- [ ] Dark/Light mode toggle
- [ ] Drag & Drop reordering

## 👨‍💻 Autor

**Przemysław Wenderholm**

- GitHub: [@Wenderholm](https://github.com/Wenderholm)
```

```
