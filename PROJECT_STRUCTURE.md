# 🗂️ Struktura projektu - Pizzeria Münsingen

## 📁 Przegląd plików i ich funkcje

### 🎨 Style i Design

**`src/assets/styles.css`** - Główny plik styli
- Zawiera wszystkie style dla całej aplikacji
- Dark theme z złotymi akcentami
- CSS Variables dla łatwej modyfikacji kolorów
- Responsywny design
- Hover efekty i animacje

**Kluczowe zmienne CSS:**
```css
--primary-gold: #F5B301    /* Złoty kolor */
--dark-bg: #1a1a1a         /* Główne tło */
--darker-bg: #0d0d0d       /* Ciemniejsze tło dla kart */
--text-light: #e5e5e5      /* Jasny tekst */
--text-muted: #a0a0a0      /* Wyciszony tekst */
```

### 📄 Strony (Pages)

**`src/pages/Home.jsx`** - Strona główna
- Hero section z dużym obrazem tła
- Nagłówek: "Feel the original taste."
- Dwa przyciski CTA
- Dekoracyjne elementy SVG (pizza slices)

**`src/pages/Menu.jsx`** - Strona menu
- Wyświetla wszystkie pizze z menu.json
- Grid layout
- Integracja z koszykiem
- Kategorie produktów

**`src/pages/Order.jsx`** - Strona zamówienia
- Formularz zamówienia
- Wybór typu dostawy (dostawa/odbiór)
- Podsumowanie koszyka
- Wybór metody płatności

**`src/pages/Contact.jsx`** - Strona kontaktowa
- Informacje kontaktowe
- Adres, telefon, email
- Godziny otwarcia
- Miejsce na mapę Google

### 🧩 Komponenty (Components)

**`src/components/Header.jsx`** - Nawigacja
- Sticky header
- Logo SVG (pizza pattern)
- Menu nawigacyjne
- Licznik koszyka
- Hover efekty

**`src/components/Footer.jsx`** - Stopka
- Copyright
- Godziny otwarcia
- Informacje kontaktowe

**`src/components/MenuList.jsx`** - Lista menu według kategorii
- Grupuje produkty po kategorii
- Wyświetla grid produktów
- Używa MenuItem dla każdego produktu

**`src/components/MenuItem.jsx`** - Karta produktu
- Zdjęcie produktu
- Nazwa i opis
- Cena w CHF
- Przycisk "Hinzufügen"
- Hover efekt

**`src/components/Cart.jsx`** - Koszyk zakupów
- Lista produktów w koszyku
- Zmiana ilości
- Usuwanie produktów
- Suma całkowita
- Link do zamówienia

**`src/components/OrderForm.jsx`** - Formularz zamówienia
- Pola: imię, telefon, adres
- Radio buttons (dostawa/odbiór)
- Select metody płatności
- Walidacja formularza
- Submit zamówienia

### 🔧 Konfiguracja i Context

**`src/context/CartContext.jsx`** - Context API dla koszyka
- Stan koszyka globalny
- Funkcje: addToCart, removeFromCart, updateQty
- Obliczanie sumy
- LocalStorage persistence (opcjonalnie)

**`src/data/menu.json`** - Dane menu
```json
{
  "id": "p1",
  "name": "Margherita",
  "category": "Pizza",
  "price": 7.5,
  "description": "Opis",
  "image": "/images/pizzas/margherita.jpg"
}
```

**`src/App.jsx`** - Główny komponent aplikacji
- Router setup
- Layout (Header + Main + Footer)
- CartProvider wrapper

**`src/main.jsx`** - Entry point
- Renderuje App
- Łączy z DOM (#root)
- Importuje style

### 🖼️ Pliki publiczne

**`public/images/pizzas/`** - Folder na zdjęcia
- Dodaj tutaj wszystkie zdjęcia pizzy
- Wymiary: min. 800x600px
- Format: JPG, WebP
- Zobacz: IMAGES_SETUP.md

**`index.html`** - Główny HTML
- Podstawowa struktura
- Meta tags
- Mount point (#root)

### ⚙️ Konfiguracja

**`package.json`** - Zależności npm
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x"
  }
}
```

**`vite.config.js`** - Konfiguracja Vite
- Dev server
- Build options
- Plugins

## 🔄 Przepływ danych

1. **Użytkownik** → Otwiera stronę
2. **Home.jsx** → Hero section z CTA
3. **Menu.jsx** → Lista pizz z menu.json
4. **MenuItem** → Użytkownik klika "Hinzufügen"
5. **CartContext** → Dodaje produkt do koszyka
6. **Cart** → Aktualizuje licznik w Header
7. **Order.jsx** → Użytkownik przechodzi do zamówienia
8. **OrderForm** → Wypełnia formularz i wysyła

## 🎯 Które pliki edytować?

### Zmiana kolorów:
✏️ `src/assets/styles.css` (linie 2-8, CSS variables)

### Dodanie nowych pizz:
✏️ `src/data/menu.json`

### Zmiana tekstu na stronie głównej:
✏️ `src/pages/Home.jsx`

### Zmiana logo:
✏️ `src/components/Header.jsx` (SVG logo)

### Dodanie nowych stron:
1. ✏️ Stwórz nowy plik w `src/pages/`
2. ✏️ Dodaj route w `src/App.jsx`
3. ✏️ Dodaj link w `src/components/Header.jsx`

### Integracja płatności (PayPal/Stripe):
✏️ `src/components/OrderForm.jsx` (funkcja submit)

## 🚀 Najczęstsze modyfikacje

### Zmiana głównego koloru z złotego na inny:

```css
/* W styles.css */
:root {
  --primary-gold: #your-color-here;
}
```

### Dodanie nowej kategorii menu:

```json
// W menu.json
{
  "id": "d2",
  "name": "Tiramisu",
  "category": "Desery",
  "price": 5.0,
  "description": "Włoski deser",
  "image": "/images/pizzas/tiramisu.jpg"
}
```

### Zmiana języka z niemieckiego na angielski:
Znajdź i zamień wszystkie teksty w:
- `src/pages/*.jsx`
- `src/components/*.jsx`

## 📞 Gdzie szukać pomocy?

- **React:** https://react.dev
- **React Router:** https://reactrouter.com
- **Vite:** https://vitejs.dev
- **CSS Tricks:** https://css-tricks.com
