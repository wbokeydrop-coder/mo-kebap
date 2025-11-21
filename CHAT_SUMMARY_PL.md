Pełne podsumowanie i zapis działań (po polsku)

- Data: 2025-11-19

Cel:
- Przygotować stronę https://www.mo-kebap.de do akceptacji przez Google AdSense oraz poprawić SEO.

Wykonane prace:
- Rozbudowano opisy menu (wszystkie pozycje): teraz posiadają pełne, niemieckie, SEO-friendly opisy.
- Dodano strony informacyjne: `/about`, `/lieferung`, `/impressum`, `/faq`.
- Zaktualizowano `public/sitemap.xml` i `dist/sitemap.xml`, dodano nowe URL-e i zaktualizowano daty `lastmod`.
- Dodano `public/ads.txt` (zawartość: `google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0`).
- Zaimplementowano Cookie Consent: skrypt AdSense ładowany jest dopiero po akceptacji zgód.
- Dodano JSON-LD (Restaurant) w `index.html`.
- Zainstalowano i uruchomiono build (`npm run build`) — `dist/` zaktualizowany.
- Wdrożono na Vercel produkcyjnie (deploy) i zweryfikowano dostępność `/ads.txt` i `/sitemap.xml`.
- Dodano nagłówki bezpieczeństwa w `vercel.json` (CSP, X-Frame-Options, X-Content-Type-Options itp.) i próbowano wymusić ich propagację.

Stan aktualny:
- Treści: kompletne i bogate (menu, FAQ, strony informacyjne).
- `ads.txt` i `sitemap.xml`: dostępne i poprawne.
- Cookie banner: aktywny i blokuje ładowanie reklam przed zgodą.
- Serwerowe nagłówki CSP: dodane w `vercel.json`, ale jeśli nie są widoczne w nagłówkach odpowiedzi, wykonaj purge CDN lub redeploy (instrukcja w `VERCEL_PURGE_INSTRUCTIONS.md`).

Pliki dodane do repozytorium:
- `ADSENSE_REVIEW.txt` — gotowy tekst do wklejenia przy zgłoszeniu do AdSense.
- `GSC_NOTE.txt` — notatka do Google Search Console (sitemap + zmiany).
- `VERCEL_PURGE_INSTRUCTIONS.md` — instrukcja purge/redeploy w Vercel.

Kolejne kroki (sugerowane priorytety):
1) (Wysoki priorytet) Wykonać purge CDN / wymusić redeploy w Vercel, aby upewnić się, że serwerowe nagłówki (CSP) są widoczne. Instrukcja w `VERCEL_PURGE_INSTRUCTIONS.md`.
2) Zaloguj się do Google Search Console i zgłoś sitemap: https://www.mo-kebap.de/sitemap.xml.
3) W Google AdSense: po upewnieniu się, że `ads.txt` jest aktywne i treści są opublikowane, zgłoś prośbę o ponowną weryfikację (użyj `ADSENSE_REVIEW.txt`).
4) Po akceptacji AdSense: dostarcz ad-slot IDs (jednostki reklamowe) lub pozwól, bym je wygenerował i wdrożył — wtedy włączymy reklamy na stronie.

Uwagi prawne / operacyjne:
- `Impressum` zawiera placeholdery (właściciel, USt-ID) — uzupełnij te dane przed ostateczną publikacją.
- Jeśli nie masz uprawnień w Vercel, poproś osobę z dostępem o wykonanie purge/redeploy lub udostępnij dostęp tymczasowy.

Kontakt i wsparcie:
- Mogę zrobić purge & redeploy za Ciebie, przygotować szablon zgłoszenia do AdSense, wstawić ad-slot IDs po otrzymaniu ich, lub przygotować serverless function jeśli Vercel nie propaguje nagłówków.
