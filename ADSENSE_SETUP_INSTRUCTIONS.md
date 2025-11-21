# 📢 Instrukcje konfiguracji Google AdSense - MO KEBAP

## 🔧 Kroki do wykonania dla aktywacji AdSense

### 1. ✅ Już zrobione (przez poprawki w kodzie):
- ✅ Naprawiono problemy z przekierowaniami w `vercel.json`
- ✅ Poprawiono tagi canonical i meta SEO
- ✅ Zaktualizowano `robots.txt` z wsparciem dla AdSense
- ✅ Dodano preconnect dla domen AdSense 
- ✅ Poprawiono Content Security Policy
- ✅ Zaktualizowano komponent AdSense z lepszą obsługą

### 2. 🚨 WYMAGANE DZIAŁANIA (musisz wykonać):

#### A. Konfiguracja Slot ID w Google AdSense:
1. Zaloguj się do [Google AdSense](https://www.google.com/adsense/)
2. Przejdź do **Reklamy** → **Według jednostek reklamowych**
3. Utwórz następujące jednostki reklamowe:

**Jednostka 1: Banner górny**
- Nazwa: `MO KEBAP - Home Top Banner`
- Typ: Wyświetlane/Banner
- Rozmiar: Responsywny lub 728x90
- **Skopiuj Slot ID i zastąp w `src/config/ads.js` linię:**
  ```javascript
  home_top: 'TUTAJ_WKLEJ_SLOT_ID_Z_ADSENSE',
  ```

**Jednostka 2: Banner stopka**
- Nazwa: `MO KEBAP - Footer Banner`
- Typ: Wyświetlane/Banner  
- Rozmiar: Responsywny
- **Skopiuj Slot ID i zastąp:**
  ```javascript
  footer: 'TUTAJ_WKLEJ_SLOT_ID_Z_ADSENSE',
  ```

**Jednostka 3: Menu top**
- Nazwa: `MO KEBAP - Menu Top`
- Typ: W artykule
- **Skopiuj Slot ID i zastąp:**
  ```javascript
  menu_top: 'TUTAJ_WKLEJ_SLOT_ID_Z_ADSENSE',
  ```

**Jednostka 4: Menu sidebar**
- Nazwa: `MO KEBAP - Menu Rectangle`
- Typ: Wyświetlane/Prostokąt
- Rozmiar: 300x250 lub responsywny
- **Skopiuj Slot ID i zastąp:**
  ```javascript
  menu_rect: 'TUTAJ_WKLEJ_SLOT_ID_Z_ADSENSE',
  ```

#### B. Wyłączenie trybu testowego:
Po skonfigurowaniu slot ID, w pliku `src/config/ads.js` zmień:
```javascript
// Zmień z:
testMode: true,
// Na:
testMode: false,
```

#### C. Weryfikacja domeny w AdSense:
1. W panelu AdSense przejdź do **Witryny**
2. Dodaj domenę: `mo-kebap.de` lub `www.mo-kebap.de`
3. AdSense automatycznie znajdzie plik `/ads.txt` (już skonfigurowany)

### 3. 🔍 Weryfikacja i testowanie:

#### Sprawdzenie ads.txt:
- Odwiedź: `https://www.mo-kebap.de/ads.txt`
- Upewnij się, że zwraca: `google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0`

#### Test indeksowania:
1. Sprawdź w Google Search Console czy problemy z przekierowaniami zostały rozwiązane
2. Użyj narzędzia "Sprawdź adres URL" dla stron: `/`, `/menu`, `/contact`

#### Test AdSense:
1. W trybie development sprawdź czy pokazują się placeholder'y reklam
2. Po wdrożeniu na production sprawdź czy reklamy się ładują

### 4. 📊 Monitorowanie w Google Search Console:

#### Sprawdź czy zostały rozwiązane:
- ❌ **"Strona zawiera przekierowanie"** → Powinno być naprawione przez zmianę kolejności w `vercel.json`
- ❌ **"Alternatywna strona zawierająca prawidłowy tag strony kanonicznej"** → Poprawione przez lepsze tagi canonical

#### W ciągu 24-48h sprawdź:
1. **Pokrycie** → czy wszystkie strony są indeksowane
2. **Wydajność** → czy ruch się zwiększa
3. **Podstawowe dane internetowe** → czy strona zachowuje dobrą wydajność

### 5. 🚀 Po aktywacji AdSense:

1. **Monitoruj w panelu AdSense:**
   - Współczynnik klikalności (CTR)
   - Współczynnik wypełnienia reklam
   - Przychody

2. **Optymalizuj rozmieszczenie:**
   - Sprawdź która jednostka reklamowa działa najlepiej
   - Rozważ dodanie więcej jednostek na popularnych stronach

3. **Zgodność z RODO:**
   - Obecny komponent AdSense już sprawdza zgodę na cookies
   - Upewnij się, że użytkownicy mogą wycofać zgodę

### 6. 🛠️ Rozwiązywanie problemów:

**Jeśli AdSense nadal odrzuca:**
1. Sprawdź czy wszystkie słowa kluczowe są zgodne z polityką AdSense
2. Dodaj więcej unikalnego contentu (np. opis dań, historia restauracji)
3. Upewnij się, że nawigacja jest jasna i intuicyjna

**Jeśli reklamy się nie pokazują:**
1. Sprawdź konsole przeglądarki czy są błędy JavaScript
2. Upewnij się, że użytkownik zaakceptował cookies
3. Sprawdź czy slot ID są prawidłowe

### 7. 📝 Pliki wymagające Twojej aktualizacji:

1. **`src/config/ads.js`** - zastąp slot ID prawdziwymi
2. **Opcjonalnie:** Dostosuj style reklam w komponentach które używają `<AdSense />`

---

## ⚠️ WAŻNE UWAGI:

- **Nie usuwaj pliku `ads.txt`** - jest wymagany przez AdSense
- **Slot ID muszą być rzeczywiste** - placeholder'y nie będą działać w produkcji
- **Zgoda na cookies jest wymagana** - reklamy pokazują się tylko po akceptacji
- **Pierwsza płatność** z AdSense następuje po osiągnięciu progu $100