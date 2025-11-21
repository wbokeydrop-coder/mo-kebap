# 🍕 Pizzeria Münsingen - Design Modernizacja

## ✅ Zmiany zaimplementowane

### 1. **Nowy ciemny motyw (Dark Theme)**
   - Ciemne tło (#1a1a1a i #0d0d0d)
   - Złote akcenty (#F5B301)
   - Profesjonalny wygląd inspirowany LORD Pizza

### 2. **Hero Section**
   - Pełnoekranowy hero z tłem obrazu
   - Efekt overlay gradientu
   - Centralny tekst: "Feel the original taste."
   - Dwa przyciski CTA: "Order Now" i "Kontakt"
   - Dekoracyjne ikony pizzy (SVG)

### 3. **Header/Nawigacja**
   - Sticky header z ciemnym tłem
   - Logo SVG (pizza slice pattern)
   - Złoty kolor dla nazwy restauracji
   - Hover efekty na linkach
   - Zaokrąglony przycisk koszyka ze złotym tłem

### 4. **Strona Menu**
   - Grid layout dla kart pizzy
   - Ciemne karty z efektem hover
   - Obrazy pizzy na górze karty
   - Cena w złotym kolorze (CHF)
   - Przycisk "Hinzufügen" w złotym kolorze

### 5. **Koszyk (Cart)**
   - Ciemne tło z złotymi akcentami
   - Czytelna lista produktów
   - Input do zmiany ilości
   - Przycisk usuwania (✕)
   - Podsumowanie ceny na złotym tle

### 6. **Strona zamówienia (Order)**
   - Formularz z ciemnym tłem
   - Złote nagłówki
   - Radio buttons dla typu dostawy
   - Select dla metody płatności
   - Duży przycisk CTA

### 7. **Strona kontaktowa**
   - Grid layout z informacjami
   - Ciemne karty
   - Miejsce na Google Maps
   - Ikona lokalizacji SVG

### 8. **Footer**
   - Minimalistyczny design
   - Informacje o prawach autorskich
   - Godziny otwarcia

## 📋 Co należy dodać

### Obrazy do dodania w `public/images/pizzas/`:

1. **margherita.jpg** - Będzie używany jako tło hero section
   - Zalecany rozmiar: 1920x1080px minimum
   - Format: JPG lub WebP
   - Dobra jakość, atrakcyjny wygląd pizzy

2. **Zdjęcia pizz dla menu** - zgodnie z menu.json:
   - Każda pizza powinna mieć swoje zdjęcie
   - Rozmiar: 800x600px lub większy
   - Format: JPG
   - Spójny styl fotografii (to samo oświetlenie, tło)

### Sugerowane źródła obrazów:
- Unsplash.com (darmowe, wysokiej jakości)
- Pexels.com (darmowe)
- Własne zdjęcia pizzy

## 🎨 Paleta kolorów użyta w projekcie:

```css
--primary-gold: #F5B301     /* Główny złoty kolor */
--dark-bg: #1a1a1a          /* Ciemne tło */
--darker-bg: #0d0d0d        /* Jeszcze ciemniejsze tło */
--text-light: #e5e5e5       /* Jasny tekst */
--text-muted: #a0a0a0       /* Wyciszony tekst */
--accent-orange: #ff6b35    /* Pomarańczowy akcent */
```

## 🚀 Jak uruchomić projekt:

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build produkcyjny
npm run build
```

## 📱 Responsywność

Design jest w pełni responsywny:
- Mobile-first approach
- Breakpoint na 768px dla tabletów
- Breakpoint na 800px dla desktopów
- Grid layout automatycznie dostosowuje się

## 🔧 Technologie użyte:

- React 18
- React Router
- Vite
- CSS3 (Custom Properties)
- SVG Graphics

## 💡 Dodatkowe sugestie:

1. **Dodaj animacje AOS** (Animate On Scroll)
2. **Integracja z Google Maps** na stronie kontaktowej
3. **Dodaj lightbox** dla zdjęć pizzy
4. **Favicon** - ikona pizzy dla zakładki przeglądarki
5. **Loading states** dla obrazów
6. **Lazy loading** dla obrazów poniżej fold

## 📞 Pomoc techniczna

Jeśli masz pytania dotyczące implementacji, sprawdź:
- `src/assets/styles.css` - wszystkie style
- `src/pages/Home.jsx` - hero section
- `src/components/Header.jsx` - nawigacja
