# 🚀 Deployment Guide - Pizzeria Münsingen

## Przewodnik wdrożenia aplikacji na produkcję

---

## 📋 Pre-deployment Checklist

Przed deploymentem upewnij się, że:

- [ ] Wszystkie zdjęcia pizzy są dodane i zoptymalizowane
- [ ] Menu.json zawiera prawdziwe produkty i ceny
- [ ] Informacje kontaktowe są aktualne
- [ ] Testowanie na różnych urządzeniach (mobile, tablet, desktop)
- [ ] Testowanie w różnych przeglądarkach (Chrome, Firefox, Safari, Edge)
- [ ] Usunięte console.log() i kod debugowania
- [ ] Zaktualizowane meta tagi (title, description)
- [ ] Dodane favicony

---

## 🌐 Opcje hostingu

### 1. Vercel (Rekomendowane) ⭐

**Zalety:**
- ✅ Darmowy hosting
- ✅ Automatyczny deployment z Git
- ✅ SSL certyfikat
- ✅ CDN globalny
- ✅ Zero-config dla Vite
- ✅ Custom domain

**Kroki:**

1. **Rejestracja**
   ```
   https://vercel.com/signup
   ```

2. **Instalacja Vercel CLI**
   ```powershell
   npm i -g vercel
   ```

3. **Login**
   ```powershell
   vercel login
   ```

4. **Deploy**
   ```powershell
   cd "c:\Pizzeria Munsingen"
   vercel
   ```

5. **Odpowiedz na pytania:**
   - Set up and deploy? `Y`
   - Which scope? (wybierz swoje konto)
   - Link to existing project? `N`
   - Project name? (zostaw domyślne lub zmień)
   - Directory? `./`
   - Override settings? `N`

6. **Gotowe!** 
   Otrzymasz URL typu: `pizzeria-munsingen.vercel.app`

**Deploy produkcyjny:**
```powershell
vercel --prod
```

**Custom Domain:**
1. W dashboard Vercel: Settings → Domains
2. Dodaj swoją domenę (np. `pizzeria-muensingen.ch`)
3. Skonfiguruj DNS zgodnie z instrukcjami

---

### 2. Netlify

**Zalety:**
- ✅ Darmowy hosting
- ✅ Continuous deployment
- ✅ SSL darmowy
- ✅ Form handling

**Kroki:**

1. **Rejestracja**
   ```
   https://app.netlify.com/signup
   ```

2. **Przez Git:**
   - Wgraj projekt na GitHub
   - W Netlify: "New site from Git"
   - Wybierz repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

3. **Przez CLI:**
   ```powershell
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

4. **Konfiguracja redirects** (dla React Router):
   
   Stwórz `public/_redirects`:
   ```
   /*    /index.html   200
   ```

---

### 3. GitHub Pages

**Zalety:**
- ✅ Całkowicie darmowy
- ✅ Integracja z GitHub

**Kroki:**

1. **Zainstaluj gh-pages:**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Dodaj w package.json:**
   ```json
   {
     "homepage": "https://twoj-username.github.io/pizzeria-munsingen",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Zaktualizuj vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/pizzeria-munsingen/',
     plugins: [react()]
   })
   ```

4. **Deploy:**
   ```powershell
   npm run deploy
   ```

5. **Włącz GitHub Pages:**
   - Repository → Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

### 4. VPS (Własny serwer)

**Dla zaawansowanych użytkowników**

**Wymagania:**
- Linux server (Ubuntu 20.04+)
- Node.js zainstalowany
- Nginx lub Apache
- SSL certyfikat (Let's Encrypt)

**Kroki skrócone:**

1. **Build aplikacji:**
   ```bash
   npm run build
   ```

2. **Upload plików z `dist/` na serwer:**
   ```bash
   scp -r dist/* user@your-server:/var/www/pizzeria
   ```

3. **Konfiguracja Nginx:**
   ```nginx
   server {
       listen 80;
       server_name pizzeria-muensingen.ch;
       root /var/www/pizzeria;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **SSL (Let's Encrypt):**
   ```bash
   sudo certbot --nginx -d pizzeria-muensingen.ch
   ```

---

## 🔧 Build Optimization

### 1. Optymalizuj obrazy

**Online:**
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

**CLI:**
```powershell
npm install -g imagemin-cli
imagemin public/images/**/* --out-dir=public/images
```

### 2. Analizuj bundle

```powershell
npm install -D rollup-plugin-visualizer
```

Dodaj w `vite.config.js`:
```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer()
  ]
})
```

### 3. Environment Variables

Stwórz `.env.production`:
```
VITE_API_URL=https://api.pizzeria-muensingen.ch
```

---

## 🔐 Security Best Practices

### 1. HTTPS Only
- Wszystkie hosty (Vercel, Netlify) zapewniają SSL automatycznie
- Dla VPS: użyj Let's Encrypt

### 2. Environment Variables
- Nigdy nie commituj `.env` do Git
- Użyj secrets w platformie hostingowej

### 3. Content Security Policy
Dodaj w `index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; img-src 'self' https:; script-src 'self'">
```

### 4. CORS Configuration
Jeśli używasz backendu, skonfiguruj CORS:
```javascript
// Backend
app.use(cors({
  origin: 'https://pizzeria-muensingen.ch'
}));
```

---

## 📊 Analytics Setup

### Google Analytics

1. Stwórz property na https://analytics.google.com

2. Dodaj tracking code w `index.html`:
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  </script>
</head>
```

---

## 🔄 Continuous Deployment

### Vercel + GitHub

1. Połącz repository GitHub z Vercel
2. Każdy push na `main` = automatyczny deploy
3. Pull requesty = preview deployment

### GitHub Actions

Stwórz `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🌍 Custom Domain Setup

### Krok 1: Kup domenę
- name.com
- namecheap.com
- godaddy.com
- hostpoint.ch (dla .ch domen)

### Krok 2: Skonfiguruj DNS

**Dla Vercel:**
```
Type: A Record
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Dla Netlify:**
```
Type: A Record
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Krok 3: Dodaj domenę w platformie
- Vercel: Settings → Domains
- Netlify: Domain settings → Add custom domain

### Krok 4: Poczekaj (propagacja DNS 1-48h)

---

## 🧪 Testing Pre-Production

### 1. Performance Test
- Google PageSpeed Insights: https://pagespeed.web.dev
- Target: Score 90+

### 2. SEO Check
- Google Search Console
- Meta tags validator

### 3. Mobile Test
- Chrome DevTools (F12 → Toggle device toolbar)
- BrowserStack (płatne)
- Rzeczywiste urządzenia

### 4. Cross-browser Test
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓

---

## 📈 Post-Deployment

### 1. Monitoring

**Uptime monitoring:**
- UptimeRobot (darmowy)
- Pingdom

**Error tracking:**
- Sentry.io
- LogRocket

### 2. Backup

```powershell
# Backup przed każdym deploymentem
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0
```

### 3. Documentation

Aktualizuj:
- README.md
- CHANGELOG.md
- Version numbers

---

## 🆘 Troubleshooting

### Problem: Blank page po deploy
**Rozwiązanie:** Sprawdź base path w `vite.config.js`

### Problem: 404 on refresh
**Rozwiązanie:** Dodaj `_redirects` (Netlify) lub `vercel.json`

Dla Vercel stwórz `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Problem: Obrazy nie ładują się
**Rozwiązanie:** Sprawdź ścieżki (absolute vs relative)

### Problem: Wolne ładowanie
**Rozwiązanie:** 
- Optymalizuj obrazy
- Enable compression
- Use WebP format
- Lazy loading

---

## ✅ Production Checklist

- [ ] Build działa lokalnie (`npm run build && npm run preview`)
- [ ] Wszystkie linki działają
- [ ] Formularze działają
- [ ] Płatności testowane (sandbox)
- [ ] Meta tags SEO dodane
- [ ] Favicons dodane
- [ ] Google Analytics skonfigurowane
- [ ] Robots.txt dodany
- [ ] Sitemap.xml dodany
- [ ] 404 page dodana
- [ ] Loading states dodane
- [ ] Error handling dodany
- [ ] Mobile responsive
- [ ] Performance > 90
- [ ] Accessibility checked
- [ ] HTTPS enabled
- [ ] Domain configured
- [ ] Backup stworzony

---

**Gotowe do produkcji! 🎉**

Powodzenia z wdrożeniem! 🚀
