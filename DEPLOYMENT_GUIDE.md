# Instrukcje Wdrożenia - MO KEBAP

## ✅ Build zakończony pomyślnie!

Folder `dist/` zawiera gotową do wdrożenia aplikację.

---

## 🚀 OPCJA 1: Wdrożenie przez Vercel (ZALECANE)

### Metoda A: Przez Vercel CLI

1. **Zainstaluj Vercel CLI globalnie:**
```powershell
npm install -g vercel
```

2. **Zaloguj się do Vercel:**
```powershell
vercel login
```

3. **Wdróż projekt:**
```powershell
vercel --prod
```

### Metoda B: Przez interfejs Vercel (najprostsze)

1. Wejdź na: https://vercel.com
2. Kliknij "Add New Project"
3. Importuj projekt z GitHub/GitLab lub prześlij folder
4. Vercel automatycznie wykryje Vite i wdroży stronę

**Uwaga:** Plik `vercel.json` jest już skonfigurowany z optymalizacjami cache!

---

## 🚀 OPCJA 2: Wdrożenie przez FTP (tradycyjne hostingi)

Jeśli masz tradycyjny hosting z FTP:

1. Połącz się z serwerem FTP
2. Prześlij **całą zawartość folderu `dist/`** do folderu `public_html/` lub `www/`
3. Upewnij się, że przesłałeś:
   - `index.html`
   - folder `assets/`
   - `sitemap.xml`
   - `robots.txt`
   - `ads.txt`
   - `vercel.json` (opcjonalnie)

---

## 🚀 OPCJA 3: GitHub Pages

1. **Utwórz repozytorium GitHub**
2. **Dodaj do package.json:**
```json
"homepage": "https://twoja-nazwa.github.io/mo-kebab",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Zainstaluj gh-pages:**
```powershell
npm install -D gh-pages
```

4. **Wdróż:**
```powershell
npm run deploy
```

---

## 🚀 OPCJA 4: Netlify

### Przez Netlify CLI:

1. **Zainstaluj Netlify CLI:**
```powershell
npm install -g netlify-cli
```

2. **Zaloguj się:**
```powershell
netlify login
```

3. **Wdróż:**
```powershell
netlify deploy --prod --dir=dist
```

### Przez interfejs Netlify:

1. Wejdź na: https://www.netlify.com
2. Przeciągnij folder `dist/` na stronę (drag & drop)

---

## 📋 CHECKLIST PO WDROŻENIU

Po wdrożeniu strony **KONIECZNIE**:

### 1. Zaktualizuj AdSense Slot IDs
Zamień placeholder ID w plikach:
- `src/pages/Home.jsx` - slot="1234567890"
- `src/pages/Menu.jsx` - slot="5555555555" i slot="6666666666"
- `src/components/Footer.jsx` - slot="9876543210"

### 2. Google Search Console
- Przejdź do: https://search.google.com/search-console
- Dodaj swoją domenę
- Prześlij sitemap: `https://mo-kebab.de/sitemap.xml`

### 3. Google AdSense
- Zaloguj się do: https://www.google.com/adsense
- Dodaj swoją stronę
- Utwórz jednostki reklamowe i pobierz prawdziwe slot IDs
- Zweryfikuj, że `ads.txt` jest dostępny: `https://mo-kebab.de/ads.txt`

### 4. Sprawdź domeny w plikach
W pliku `index.html` zamień wszystkie wystąpienia URL:
- `https://mo-kebab.de/` → Twoja prawdziwa domena

### 5. Google My Business
- Utwórz profil dla "MO KEBAP Münsingen"
- Dodaj zdjęcia, godziny otwarcia, menu
- Link do strony: mo-kebab.de

### 6. Testowanie
- Przetestuj stronę na mobile (responsywność)
- Sprawdź szybkość: https://pagespeed.web.dev/
- Sprawdź SEO: https://www.seobility.net/en/seocheck/

---

## 🔄 Aktualizacje w przyszłości

Gdy wprowadzasz zmiany:

1. **Edytuj kod źródłowy** w folderze `src/`
2. **Zbuduj ponownie:**
```powershell
npm run build
```

3. **Wdróż na nowo** (w zależności od wybranej metody):
```powershell
vercel --prod
# lub
netlify deploy --prod --dir=dist
# lub prześlij przez FTP
```

---

## 📞 Dane do aktualizacji

**WAŻNE:** Zaktualizuj w `index.html` (Schema.org):
- Numer telefonu: obecnie placeholder
- Dokładny adres: obecnie "Hauptstraße"
- Rzeczywiste godziny otwarcia

---

## ✅ Co już jest skonfigurowane:

- ✅ Kompresja i minifikacja kodu
- ✅ Cache headers w Vercel
- ✅ Lazy loading obrazów
- ✅ SEO meta tagi
- ✅ Schema.org structured data
- ✅ Sitemap.xml i robots.txt
- ✅ Google AdSense integration
- ✅ GDPR cookie consent
- ✅ Privacy policy

---

**Powodzenia z wdrożeniem! 🚀**
