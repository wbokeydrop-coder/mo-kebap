# 🍕 Pizzeria Münsingen — Modern Dark Theme

**Elegancka strona internetowa pizzerii z ciemnym motywem i złotymi akcentami**

![Design](https://img.shields.io/badge/Design-LORD_Pizza_Inspired-F5B301?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)

## ✨ Cechy projektu

- 🎨 **Nowoczesny Dark Theme** - Elegancki ciemny design z złotymi akcentami (#F5B301)
- 📱 **W pełni responsywny** - Mobile-first approach
- 🛒 **Koszyk zakupów** - Pełna funkcjonalność z Context API
- 🍕 **Dynamiczne menu** - Łatwe zarządzanie przez JSON
- 🎭 **Smooth animations** - Hover efekty i transycje
- 🚀 **Szybka wydajność** - Vite + React
- 🌐 **Routing** - React Router v6

## 🚀 Szybki start

```powershell
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Otwórz: http://localhost:5173
```

## 📋 Wymagania

- Node.js 16+ 
- npm lub yarn

## 🎨 Paleta kolorów

```css
--primary-gold: #F5B301     /* Złoty kolor akcentów */
--dark-bg: #1a1a1a          /* Ciemne tło */
--darker-bg: #0d0d0d        /* Ciemniejsze tło kart */
--text-light: #e5e5e5       /* Jasny tekst */
--text-muted: #a0a0a0       /* Wyciszony tekst */
--accent-orange: #ff6b35    /* Pomarańczowy akcent */
```

## 📁 Struktura projektu

```
src/
├── components/         # Komponenty React
│   ├── Header.jsx     # Nawigacja z logo
│   ├── Footer.jsx     # Stopka
│   ├── MenuItem.jsx   # Karta produktu
│   ├── MenuList.jsx   # Lista menu
│   ├── Cart.jsx       # Koszyk
│   └── OrderForm.jsx  # Formularz zamówienia
├── pages/             # Strony
│   ├── Home.jsx       # Hero section
│   ├── Menu.jsx       # Strona menu
│   ├── Order.jsx      # Zamówienie
│   └── Contact.jsx    # Kontakt
├── context/
│   └── CartContext.jsx # Stan koszyka
├── data/
│   └── menu.json      # Dane menu
└── assets/
    └── styles.css     # Wszystkie style
```

## 🖼️ Dodawanie obrazów

**WAŻNE:** Musisz dodać zdjęcia pizzy do projektu!

Szczegółowe instrukcje: [IMAGES_SETUP.md](IMAGES_SETUP.md)

Wymagane pliki w `public/images/pizzas/`:
- `margherita.jpg` (1920x1080px) - tło hero section
- `salami.jpg` - zdjęcie pizzy salami
- `coke.jpg` - zdjęcie napoju
- `cheese.jpg` - zdjęcie dodatku

**Darmowe źródła zdjęć:**
- [Unsplash](https://unsplash.com/s/photos/pizza)
- [Pexels](https://www.pexels.com/search/pizza/)

## 🔧 Konfiguracja

### Zmiana menu

Edytuj `src/data/menu.json`:

```json
{
  "id": "p1",
  "name": "Margherita",
  "category": "Pizza",
  "price": 7.5,
  "description": "Tomatensauce, Mozzarella, Basilikum",
  "image": "/images/pizzas/margherita.jpg"
}
```

### Zmiana kolorów

Edytuj CSS variables w `src/assets/styles.css`:

```css
:root {
  --primary-gold: #YourColorHere;
  --dark-bg: #YourDarkColor;
}
```

## 💳 Integracja płatności

Placeholder znajduje się w `src/components/OrderForm.jsx`.

**Rekomendowane rozwiązania:**
- **Stripe** - https://stripe.com
- **PayPal** - https://developer.paypal.com
- **Backend** - Node.js/Express endpoint

## 📚 Dodatkowa dokumentacja

- 📘 [DESIGN_CHANGES.md](DESIGN_CHANGES.md) - Co zostało zmienione w designie
- 📘 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Szczegółowy opis struktury
- 📘 [IMAGES_SETUP.md](IMAGES_SETUP.md) - Jak dodać obrazy

## 🛠️ Build produkcyjny

```powershell
# Build
npm run build

# Preview
npm run preview
```

Pliki produkcyjne będą w folderze `dist/`.

## 🌐 Deploy

Projekt można wdrożyć na:
- **Vercel** - https://vercel.com (zalecane dla Vite/React)
- **Netlify** - https://netlify.com
- **GitHub Pages**
- **Własny serwer** (VPS)

## 🔐 Bezpieczeństwo

- ⚠️ Nie przechowuj danych karty kredytowej po stronie frontendu
- ⚠️ Użyj HTTPS w produkcji
- ⚠️ Implementuj walidację po stronie backendu
- ⚠️ Użyj environment variables dla kluczy API

## 🐛 Troubleshooting

**Problem: Obrazy się nie ładują**
- Sprawdź czy pliki są w `public/images/pizzas/`
- Sprawdź nazwy plików (wielkość liter!)
- Zobacz [IMAGES_SETUP.md](IMAGES_SETUP.md)

**Problem: Koszyk nie działa**
- Sprawdź czy CartProvider opakowuje App w `src/App.jsx`
- Sprawdź konsolę przeglądarki (F12)

**Problem: Routing nie działa po deploy**
- Dodaj plik `_redirects` (Netlify) lub `vercel.json` (Vercel)

## 📄 Licencja

Ten projekt jest szablonem do użytku komercyjnego i edukacyjnego.

## 👨‍💻 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router 6
- **State:** Context API
- **Styling:** CSS3 (Custom Properties)
- **Icons:** SVG

## 🎯 TODO (Przyszłe usprawnienia)

- [ ] Integracja z backendem (API)
- [ ] Baza danych dla zamówień
- [ ] System płatności (Stripe/PayPal)
- [ ] Panel admina
- [ ] System rezerwacji
- [ ] Newsletter
- [ ] Google Maps API
- [ ] Lazy loading obrazów
- [ ] PWA support
- [ ] Multi-language support

## 🤝 Contributing

Propozycje ulepszeń mile widziane!

## 📞 Wsparcie

Jeśli potrzebujesz pomocy:
1. Sprawdź dokumentację w folderze głównym
2. Zobacz kod źródłowy z komentarzami
3. Przeczytaj React docs: https://react.dev

---

**Zrobione z ❤️ dla Pizzeria Münsingen**
