Jak wyczyścić cache / wymusić propagację nagłówków w Vercel (instrukcja)

Jeśli serwerowe nagłówki (np. `Content-Security-Policy`) nie są widoczne w odpowiedziach, wykonaj poniższe kroki w panelu Vercel, aby wymusić purge CDN / redeploy.

1) Zaloguj się na https://vercel.com i wybierz projekt (np. „pizzeria-munsingen”).

2) Otwórz stronę „Deployments” (Wdrożenia) projektu.

3) Znajdź ostatnie wdrożenie produkcyjne (prod) i kliknij na nie.

4) W szczegółach wdrożenia:
   - Jeżeli jest dostępna opcja „Invalidate Cache” lub „Purge CDN”, kliknij ją i potwierdź.
   - Jeśli nie ma takiej opcji, kliknij „Redeploy” albo „Re-deploy” (czasami pod menu z trzema kropkami). Redeploy wymusi nową wersję i odświeży cache.

5) Po wykonaniu purge/redeploy poczekaj 1–2 minuty i sprawdź nagłówki strony:
   - W PowerShell: (Invoke-WebRequest -Uri 'https://www.mo-kebap.de' -UseBasicParsing -Method Head).Headers
   - Sprawdź czy nagłówek `Content-Security-Policy` pojawił się w odpowiedziach.

6) Jeśli nadal brak CSP w odpowiedziach serwera:
   - Rozważ opcję serwowania `index.html` przez serverless function (Node) która doda nagłówki — mogę przygotować taką funkcję i wdrożyć ją za Ciebie.
   - Alternatywnie skontaktuj się ze wsparciem Vercel i poproś o pomoc w propagacji nagłówków z pliku `vercel.json`.

Uwaga: Redeploy nie usuwa plików ani konfiguracji — wykonuje nową wersję Twojej aplikacji. Purge CDN natychmiast usuwa zapisane kopie w warstwie CDN i powoduje, że nowy request pobiera świeżo z serwera z aktualnymi nagłówkami.
