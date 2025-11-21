# ❓ FAQ - Frequently Asked Questions

## Pizzeria Münsingen - Najczęściej zadawane pytania

---

## 🚀 Getting Started

### Q: Jak uruchomić projekt?
**A:** 
```powershell
npm install
npm run dev
```
Szczegóły w [QUICK_START.md](QUICK_START.md)

### Q: Czy potrzebuję doświadczenia w React?
**A:** Podstawowa znajomość React pomoże, ale projekt jest dobrze udokumentowany. Możesz modyfikować:
- Teksty w plikach `.jsx`
- Style w `styles.css`
- Menu w `menu.json`

### Q: Jakie są wymagania systemowe?
**A:** 
- Node.js 16 lub nowszy
- npm lub yarn
- Nowoczesna przeglądarka
- Dowolny edytor kodu (VS Code zalecany)

---

## 🎨 Design & Styling

### Q: Jak zmienić kolor złoty na inny?
**A:** Edytuj `src/assets/styles.css`, linie 2-8:
```css
:root {
  --primary-gold: #TWOJ_KOLOR;
}
```

### Q: Jak zmienić czcionkę?
**A:** W `styles.css` zmień:
```css
body {
  font-family: 'Twoja Czcionka', sans-serif;
}
```

### Q: Czy mogę zmienić z dark theme na light theme?
**A:** Tak! Zmień w `styles.css`:
```css
:root {
  --dark-bg: #ffffff;
  --text-light: #222222;
  --darker-bg: #f5f5f5;
}
```

### Q: Jak dodać logo zamiast SVG?
**A:** W `Header.jsx` zamień SVG na:
```jsx
<img src="/images/logo.png" alt="Logo" className="logo" />
```

---

## 🖼️ Images

### Q: Gdzie dodać zdjęcia pizzy?
**A:** W folderze `public/images/pizzas/`
Zobacz szczegóły: [IMAGES_SETUP.md](IMAGES_SETUP.md)

### Q: Jakie rozmiary obrazów są zalecane?
**A:** 
- Hero image: 1920x1080px
- Menu items: 800x600px
- Format: JPG lub WebP
- Jakość: 80-85%

### Q: Gdzie znaleźć darmowe zdjęcia?
**A:** 
- Unsplash.com
- Pexels.com
- Pixabay.com
Linki w [FREE_IMAGES.md](FREE_IMAGES.md)

### Q: Co jeśli nie mam zdjęć?
**A:** Projekt działa z fallbackiem. Zobaczysz placeholder lub ciemne tło.

---

## 🍕 Menu Management

### Q: Jak dodać nową pizzę?
**A:** Edytuj `src/data/menu.json`, dodaj nowy obiekt:
```json
{
  "id": "p4",
  "name": "Twoja Pizza",
  "category": "Pizza",
  "price": 12.50,
  "description": "Składniki...",
  "image": "/images/pizzas/twoja-pizza.jpg"
}
```

### Q: Czy mogę dodać nowe kategorie?
**A:** Tak! Po prostu użyj nowej nazwy w `category`. Automatycznie się pojawi.

### Q: Jak zmienić cenę?
**A:** W `menu.json` zmień wartość `price`.

### Q: Czy mogę usunąć walutę CHF?
**A:** Tak, w `MenuItem.jsx` zmień:
```jsx
<span className="price">CHF {item.price.toFixed(2)}</span>
```
na:
```jsx
<span className="price">${item.price.toFixed(2)}</span>
```

---

## 🛒 Shopping Cart

### Q: Gdzie jest przechowywany koszyk?
**A:** W React Context API (`CartContext.jsx`). Dane są w pamięci przeglądarki.

### Q: Czy koszyk zachowuje się po odświeżeniu?
**A:** Nie domyślnie. Możesz dodać localStorage persistence.

### Q: Jak dodać localStorage dla koszyka?
**A:** W `CartContext.jsx` dodaj:
```javascript
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(items));
}, [items]);

// I przy inicjalizacji:
const [items, setItems] = useState(() => {
  const saved = localStorage.getItem('cart');
  return saved ? JSON.parse(saved) : [];
});
```

---

## 💳 Payments

### Q: Jak zintegrować płatności?
**A:** Zobacz [DEPLOYMENT.md](DEPLOYMENT.md) - sekcja Payment Integration.
Zalecane:
- Stripe (https://stripe.com)
- PayPal (https://paypal.com)

### Q: Czy potrzebuję backendu dla płatności?
**A:** TAK! Nigdy nie przetwarzaj płatności tylko po stronie frontendu. Potrzebny backend.

### Q: Czy są przykłady integracji?
**A:** W `OrderForm.jsx` jest placeholder. Dokumentacja Stripe/PayPal zawiera przykłady.

---

## 🌐 Deployment

### Q: Jak wgrać stronę na internet?
**A:** Najłatwiej przez Vercel:
```powershell
npm i -g vercel
vercel
```
Pełny przewodnik: [DEPLOYMENT.md](DEPLOYMENT.md)

### Q: Ile kosztuje hosting?
**A:** 
- Vercel: Darmowy
- Netlify: Darmowy
- GitHub Pages: Darmowy
- VPS: Od $5/miesiąc

### Q: Jak podpiąć własną domenę?
**A:** Zobacz [DEPLOYMENT.md](DEPLOYMENT.md) - sekcja Custom Domain.

### Q: Co z certyfikatem SSL?
**A:** Vercel i Netlify dają darmowy SSL automatycznie.

---

## 📱 Mobile & Responsive

### Q: Czy strona jest responsywna?
**A:** Tak! Mobile-first design. Działa na wszystkich urządzeniach.

### Q: Jak testować na telefonie?
**A:** 
1. `npm run dev -- --host`
2. Sprawdź IP: `ipconfig`
3. Na telefonie: `http://TWOJE_IP:5173`

### Q: Jak zmienić breakpointy?
**A:** W `styles.css` sekcja `@media`:
```css
@media(max-width: 768px) {
  /* Mobile styles */
}
```

---

## 🔧 Technical Questions

### Q: Dlaczego Vite zamiast Create React App?
**A:** Vite jest szybszy, nowocześniejszy i lepiej zoptymalizowany.

### Q: Czy mogę użyć TypeScript?
**A:** Tak! Zmień `.jsx` → `.tsx` i dodaj typy.

### Q: Jak dodać więcej stron?
**A:** 
1. Stwórz nowy plik w `src/pages/`
2. Dodaj route w `App.jsx`
3. Dodaj link w `Header.jsx`

### Q: Czy mogę użyć styled-components?
**A:** Tak, zainstaluj i używaj. Obecny CSS też działa świetnie.

### Q: Jak dodać backend?
**A:** Zbuduj API (Node.js/Express) i połącz przez fetch/axios.

---

## 🐛 Troubleshooting

### Q: Nie widzę zmian w CSS
**A:** 
- Zapisz plik (Ctrl+S)
- Wyczyść cache (Ctrl+Shift+R)
- Restart dev server

### Q: Obrazy się nie ładują
**A:** 
- Sprawdź ścieżkę: `public/images/pizzas/`
- Sprawdź nazwę pliku (wielkość liter!)
- Sprawdź extension (.jpg nie .jpeg?)

### Q: Port 5173 jest zajęty
**A:** Vite automatycznie użyje następnego wolnego portu (5174, 5175...).

### Q: `npm install` nie działa
**A:** 
```powershell
# Usuń node_modules i spróbuj ponownie
Remove-Item -Recurse -Force node_modules
npm install
```

### Q: Blank page po deploy
**A:** Sprawdź `base` w `vite.config.js` i console w przeglądarce (F12).

---

## 🔐 Security

### Q: Czy jest bezpieczny?
**A:** Frontend jest bezpieczny, ale:
- Potrzebujesz backendu dla płatności
- Używaj HTTPS w produkcji
- Nie przechowuj wrażliwych danych w kodzie

### Q: Gdzie przechowywać klucze API?
**A:** W pliku `.env` (nigdy nie commituj do Git!):
```
VITE_API_KEY=twoj_klucz
```

---

## 📊 Analytics & SEO

### Q: Jak dodać Google Analytics?
**A:** Zobacz [DEPLOYMENT.md](DEPLOYMENT.md) - sekcja Analytics.

### Q: Jak poprawić SEO?
**A:** 
- Dodaj meta tags w `index.html`
- Stwórz `robots.txt`
- Stwórz `sitemap.xml`
- Użyj semantic HTML

### Q: Jak dodać Facebook Pixel?
**A:** Dodaj script w `index.html` zgodnie z dokumentacją FB.

---

## 💡 Features & Customization

### Q: Jak dodać rezerwacje stolików?
**A:** 
1. Stwórz nowy komponent `Reservation.jsx`
2. Dodaj formularz
3. Połącz z backendem/email service

### Q: Jak dodać newsletter?
**A:** Użyj serwisu jak Mailchimp, dodaj formularz w Footer.

### Q: Jak dodać recenzje?
**A:** 
- Integracja z Google Reviews API
- Lub własna baza danych z backendem

### Q: Jak dodać multi-language?
**A:** Użyj biblioteki `react-i18next` lub stwórz własny system tłumaczeń.

---

## 📚 Learning Resources

### Q: Gdzie nauczyć się więcej o React?
**A:** 
- https://react.dev (oficjalna dokumentacja)
- https://reactrouter.com
- YouTube tutorials

### Q: Gdzie nauczyć się CSS?
**A:** 
- https://css-tricks.com
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://web.dev/learn/css

---

## 📞 Support

### Q: Gdzie szukać pomocy?
**A:** 
1. Przeczytaj dokumentację w projekcie
2. Sprawdź [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
3. Zobacz kod źródłowy (jest komentowany)
4. Google + Stack Overflow
5. React Discord/Reddit communities

### Q: Czy mogę modyfikować projekt?
**A:** Tak! To szablon do użytku komercyjnego. Modyfikuj dowolnie.

### Q: Czy mogę sprzedać tę stronę?
**A:** Tak, możesz użyć do projektów komercyjnych.

---

## 🎯 Common Tasks Quick Reference

| Zadanie | Plik | Co zrobić |
|---------|------|-----------|
| Zmień nazwę restauracji | `Header.jsx` | Edytuj `<h1>` |
| Dodaj pizzę | `menu.json` | Dodaj nowy obiekt |
| Zmień kolor | `styles.css` | Edytuj `:root` zmienne |
| Dodaj stronę | `pages/NewPage.jsx` | Stwórz + dodaj route |
| Zmień ceny | `menu.json` | Edytuj `price` |
| Dodaj zdjęcie | `public/images/pizzas/` | Dodaj plik .jpg |

---

**Masz inne pytanie?** 
Sprawdź dokumentację lub otwórz issue na GitHubie!

---

Last updated: November 7, 2024
