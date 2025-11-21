# 📸 Instrukcje dotyczące obrazów

## Wymagane obrazy dla projektu

### 1. Tło Hero Section
**Lokalizacja:** `public/images/pizzas/margherita.jpg`
- **Zalecany rozmiar:** 1920x1080px (minimum)
- **Format:** JPG lub WebP
- **Opis:** Atrakcyjne zdjęcie pizzy Margherita, które będzie użyte jako tło głównej sekcji

**Darmowe źródła:**
- https://unsplash.com/s/photos/pizza
- https://www.pexels.com/search/pizza/

**Przykładowe wyszukiwania:**
- "Pizza margherita top view"
- "Italian pizza dark background"
- "Fresh pizza close up"

### 2. Zdjęcia menu pizzy

Potrzebne pliki w `public/images/pizzas/`:

#### Pizza:
- `margherita.jpg` - Pizza Margherita (z bazylią)
- `salami.jpg` - Pizza Salami

#### Napoje:
- `coke.jpg` - Coca-Cola w butelce/szklance

#### Dodatki:
- `cheese.jpg` - Ser mozzarella

**Specyfikacja:**
- Rozmiar: 800x600px lub większy
- Format: JPG
- Spójny styl (podobne oświetlenie, tło)
- Zalecane: ciemne lub neutralne tło

## Szybka implementacja

### Opcja 1: Użyj zdjęć z Unsplash (darmowe)

1. Wejdź na https://unsplash.com
2. Wyszukaj "pizza margherita"
3. Pobierz zdjęcie (Large/Medium)
4. Zmień nazwę na odpowiednią (np. `margherita.jpg`)
5. Umieść w `public/images/pizzas/`

### Opcja 2: Użyj placeholder images (tymczasowo)

Możesz użyć tymczasowych obrazów z:
- https://placehold.co/800x600/1a1a1a/F5B301?text=Pizza+Margherita
- https://picsum.photos/800/600

### Opcja 3: Zrób własne zdjęcia

Wskazówki dla najlepszych rezultatów:
- Użyj dobrego oświetlenia (dzienne światło lub ring light)
- Fotografuj z góry (top view) lub pod kątem 45°
- Użyj ciemnego lub drewnianego tła
- Upewnij się, że pizza wygląda apetycznie
- Dodaj garnish (bazylia, oliwa) dla lepszego wyglądu

## Struktura katalogów

```
public/
  images/
    pizzas/
      margherita.jpg  ← Główne zdjęcie (hero + menu)
      salami.jpg      ← Zdjęcie pizzy salami
      coke.jpg        ← Zdjęcie napoju
      cheese.jpg      ← Zdjęcie sera/dodatku
```

## Fallback (jeśli brakuje obrazów)

Jeśli nie dodasz obrazów, w przeglądarce zobaczysz ikonę "broken image" (🖼️). 
Możesz tymczasowo użyć CSS background jako fallback.

## Optymalizacja obrazów

Po dodaniu obrazów, zalecam optymalizację:

```bash
# Instalacja narzędzia do optymalizacji
npm install -D vite-plugin-image-optimizer

# Lub użyj online tools:
# - https://tinypng.com
# - https://squoosh.app
```

## Format WebP (opcjonalnie)

Dla lepszej wydajności możesz konwertować do WebP:

```bash
# Instalacja narzędzia
npm install -g webp

# Konwersja
cwebp margherita.jpg -o margherita.webp -q 80
```

## Testowanie

Po dodaniu obrazów:
1. Uruchom `npm run dev`
2. Sprawdź http://localhost:5173
3. Upewnij się, że wszystkie obrazy się ładują
4. Sprawdź responsive design na mobile

## Wskazówki dotyczące praw autorskich

✅ **Bezpieczne źródła (darmowe do użytku komercyjnego):**
- Unsplash.com
- Pexels.com
- Pixabay.com
- Własne zdjęcia

❌ **Unikaj:**
- Google Images (bez sprawdzenia licencji)
- Zdjęcia z innych stron pizzerii
- Zdjęcia bez odpowiedniej licencji
