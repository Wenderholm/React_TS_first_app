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

## 🖼️ Zrzuty Ekranu

<div align="center">
  <img src="./docs/screenshot1.png" alt="Główna strona aplikacji" width="600">
  <br>
  <em>Główny interfejs aplikacji z formularzem dodawania celów</em>
</div>

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

## 🎨 Style i Design

Aplikacja wykorzystuje nowoczesny design system z:

- **Kolorystyka**: Ciemny motyw z akcentami w kolorze żółtym
- **Typografia**: Google Fonts - Poppins
- **Layout**: CSS Grid i Flexbox
- **Responsywność**: Mobile-first approach

### Główne kolory

- `#3a4346` - Główny kolor tła
- `#f7e596` - Kolor akcentowy (przyciski, tytuły)
- `#f0f6f8` - Kolor tekstu
- `#475357` - Kolor kart

## 📜 Dostępne Skrypty

| Komenda           | Opis                                 |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Uruchamia serwer deweloperski        |
| `npm run build`   | Buduje aplikację produkcyjną         |
| `npm run preview` | Podgląd buildu produkcyjnego         |
| `npm run lint`    | Sprawdza kod pod kątem błędów ESLint |

## 🔧 Konfiguracja TypeScript

Projekt używa strict TypeScript configuration z:

- Pełną kontrolą typów
- Interfejsami dla props komponentów
- Type safety dla state management

### Przykład typu

```typescript
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
```

## 🤝 Rozwój Projektu

### Planowane funkcjonalności

- [ ] Edycja istniejących celów
- [ ] Kategoryzacja celów
- [ ] Local Storage persistence
- [ ] Dark/Light mode toggle
- [ ] Drag & Drop reordering

### Jak kontrybuować

1. Fork projektu
2. Stwórz feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit zmiany (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Ten projekt jest licencjonowany na licencji MIT - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 👨‍💻 Autor

**Przemysław Wenderholm**

- GitHub: [@Wenderholm](https://github.com/Wenderholm)

---

<div align="center">
  <p>⭐ Jeśli podoba Ci się ten projekt, zostaw gwiazdkę! ⭐</p>
</div>
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
