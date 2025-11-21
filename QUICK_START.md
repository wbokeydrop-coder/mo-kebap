# ⚡ Quick Start Guide - Pizzeria Münsingen

## 🎯 W 5 minut do działającej strony!

### Krok 1: Instalacja (1 min)
```powershell
cd "c:\Pizzeria Munsingen"
npm install
```

### Krok 2: Dodaj zdjęcia (2 min)
Pobierz 1 zdjęcie pizzy z:
👉 https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM

1. Kliknij "Download" (zielony przycisk)
2. Zmień nazwę na: `margherita.jpg`
3. Przenieś do: `public/images/pizzas/margherita.jpg`

**Lub użyj placeholder (tymczasowo):**
```powershell
# Zostaw bez zdjęć - będzie działać z fallbackiem
```

### Krok 3: Uruchom (30 sekund)
```powershell
npm run dev
```

### Krok 4: Otwórz w przeglądarce
```
http://localhost:5173
```

### Krok 5: Gotowe! 🎉

---

## 🎨 Pierwsze modyfikacje (opcjonalnie)

### Zmień nazwę restauracji
📄 `src/components/Header.jsx` - linia 19
```jsx
<h1>TWOJA NAZWA</h1>
```

### Zmień tekst na stronie głównej
📄 `src/pages/Home.jsx` - linia 18
```jsx
<h2>Twój nowy tekst</h2>
```

### Dodaj swoją pizzę
📄 `src/data/menu.json` - dodaj na końcu:
```json
{
  "id": "p3",
  "name": "Twoja Pizza",
  "category": "Pizza",
  "price": 12.50,
  "description": "Opis twojej pizzy",
  "image": "/images/pizzas/twoja-pizza.jpg"
}
```

### Zmień kolory
📄 `src/assets/styles.css` - linie 2-8
```css
--primary-gold: #FF5733;  /* Twój kolor */
```

---

## 🛠️ Podstawowe komendy

```powershell
# Start deweloperski
npm run dev

# Build produkcyjny
npm run build

# Preview buildu
npm run preview

# Stop serwera
Ctrl + C
```

---

## 📋 Checklist dla produkcji

- [ ] Dodaj wszystkie zdjęcia pizzy
- [ ] Zaktualizuj menu.json z prawdziwymi produktami
- [ ] Zmień informacje kontaktowe w Contact.jsx
- [ ] Zmień nazwę restauracji w Header.jsx
- [ ] Dodaj prawdziwy numer telefonu
- [ ] Zintegruj płatności (Stripe/PayPal)
- [ ] Przetestuj na telefonie (responsywność)
- [ ] Dodaj Google Analytics (opcjonalnie)
- [ ] Dodaj Google Maps na stronie kontaktowej
- [ ] Zoptymalizuj obrazy (TinyPNG)
- [ ] Deploy na Vercel/Netlify

---

## 🚨 Najczęstsze problemy

### Problem: `npm: command not found`
**Rozwiązanie:** Zainstaluj Node.js z https://nodejs.org

### Problem: Obrazy się nie wyświetlają
**Rozwiązanie:** 
1. Sprawdź czy plik jest w `public/images/pizzas/`
2. Sprawdź nazwę pliku (wielkość liter!)
3. Odśwież stronę (Ctrl + F5)

### Problem: Port 5173 zajęty
**Rozwiązanie:** 
```powershell
# Vite automatycznie użyje następnego wolnego portu
# Lub zabij proces na porcie:
npx kill-port 5173
```

### Problem: Zmiany CSS nie widoczne
**Rozwiązanie:**
- Wyczyść cache (Ctrl + Shift + R)
- Sprawdź czy plik jest zapisany
- Restart dev server (Ctrl+C, potem npm run dev)

---

## 📱 Test na telefonie

1. Sprawdź IP komputera:
```powershell
ipconfig
```

2. Uruchom z dostępem do sieci:
```powershell
npm run dev -- --host
```

3. Na telefonie otwórz:
```
http://TWOJE_IP:5173
```

---

## 🌐 Deploy na Vercel (darmowy hosting)

1. Załóż konto: https://vercel.com
2. Zainstaluj CLI:
```powershell
npm i -g vercel
```

3. Deploy:
```powershell
vercel
```

4. Gotowe! Otrzymasz URL typu: `your-app.vercel.app`

---

## 📚 Więcej informacji

- 📘 **README.md** - Pełna dokumentacja
- 📘 **DESIGN_CHANGES.md** - Co zostało zmienione
- 📘 **PROJECT_STRUCTURE.md** - Struktura plików
- 📘 **IMAGES_SETUP.md** - Jak dodać obrazy
- 📘 **FREE_IMAGES.md** - Linki do darmowych zdjęć

---

## ✨ Gratulacje!

Twoja strona pizzerii jest gotowa! 🍕

**Co dalej?**
1. Dodaj więcej pizz do menu
2. Dostosuj kolory do swojej marki
3. Dodaj prawdziwe zdjęcia
4. Zintegruj system płatności
5. Deploy na hosting

---

**Potrzebujesz pomocy?** 
- Przeczytaj pełną dokumentację w README.md
- Sprawdź React docs: https://react.dev
- Vite docs: https://vitejs.dev

**Powodzenia! 🚀**
