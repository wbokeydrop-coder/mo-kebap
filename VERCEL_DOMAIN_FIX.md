# 🔧 Vercel - Jak naprawić konfigurację domeny dla AdSense

## ❌ Problem
Google AdSense pokazuje "Nie znaleziono" dla pliku ads.txt, ponieważ domena `mo-kebap.de` przekierowuje na `www.mo-kebap.de` (307 redirect).

**Google AdSense NIE śledzi przekierowań dla ads.txt!**

---

## ✅ Rozwiązanie - Krok po kroku

### Krok 1: Wejdź do panelu Vercel Domains

🔗 **Link bezpośredni:**
```
https://vercel.com/djedm87-2370s-projects/pizzeria-munsingen/settings/domains
```

**Lub przez nawigację:**
1. https://vercel.com
2. Projekt: `pizzeria-munsingen`
3. Settings (⚙️)
4. Domains (w menu po lewej)

---

### Krok 2: Zlokalizuj domenę "mo-kebap.de"

Na liście domen zobaczysz coś takiego:

```
✅ www.mo-kebap.de              Valid Configuration    [Production]
⚠️  mo-kebap.de                 307 → www.mo-kebap.de  [Redirect]
```

**Kliknij na:** `mo-kebap.de` (ten BEZ www)

---

### Krok 3: Zmień ustawienie z Redirect na Production

#### OBECNIE (❌ ŹLE):
```
🔘 Connect to an environment
🔘 Redirect to Another Domain  ← ZAZNACZONE

   ┌─────────────────────────┐  ┌──────────────────┐
   │ 307 Temporary Redirect ▼│  │ www.mo-kebap.de ✕│
   └─────────────────────────┘  └──────────────────┘
   
   [Remove]                        [Cancel]  [Save]
```

#### ZMIEŃ NA (✅ DOBRZE):
```
🔘 Connect to an environment   ← ZAZNACZ TO!
🔘 Redirect to Another Domain

   ┌─────────────────────────┐
   │ Production             ▼│
   └─────────────────────────┘
   
   [Remove]                        [Cancel]  [Save]
```

---

### Krok 4: Zapisz zmiany

1. Kliknij przycisk **[Save]** (niebieski)
2. Poczekaj komunikat: "Domain configuration updated"
3. Poczekaj **2-3 minuty** na propagację DNS

---

### Krok 5: Weryfikacja

Uruchom w PowerShell (w folderze projektu):

```powershell
./scripts/test-ads-txt.ps1
```

**Oczekiwany rezultat:**
```
=== TEST ADS.TXT ===

mo-kebap.de:
  ✅ Status: 200 OK - GOOD!
  ✅ No redirects
  ✅ Publisher ID found

www.mo-kebap.de:
  ✅ Status: 200 OK
```

**Jeśli nadal widzisz 307 redirect:**
- Wyczyść cache: `vercel cache purge --yes`
- Poczekaj dodatkowe 5 minut
- Sprawdź ponownie

---

## 📋 Checklist - Co powinieneś zobaczyć po zmianie

- [ ] `mo-kebap.de` → Status: "Valid Configuration"
- [ ] `mo-kebap.de` → Environment: "Production"
- [ ] `www.mo-kebap.de` → Status: "Valid Configuration"  
- [ ] `www.mo-kebap.de` → Environment: "Production"
- [ ] Test ads.txt zwraca Status 200 (nie 307)
- [ ] W Google AdSense status zmieni się na "Autoryzowana" (w ciągu 24-48h)

---

## 🚫 Czego NIE robić w przyszłości

### ❌ NIGDY:
```
mo-kebap.de → Redirect to Another Domain → www.mo-kebap.de
```

### ✅ ZAWSZE:
```
mo-kebap.de → Connect to an environment → Production
www.mo-kebap.de → Connect to an environment → Production
```

---

## ❓ FAQ

### Q: Czy obie domeny będą działać?
**A:** Tak! Zarówno `mo-kebap.de` jak i `www.mo-kebap.de` będą serwować identyczną zawartość.

### Q: Czy to wpłynie na SEO?
**A:** Nie negatywnie. Obie domeny będą indeksowane przez Google. Możesz później ustawić preferowaną domenę w Google Search Console.

### Q: Czy użytkownicy zobaczą różnicę?
**A:** Nie! Strona będzie działać identycznie na obu domenach.

### Q: Kiedy Google AdSense zaktualizuje status?
**A:** Zwykle 24-48h po naprawie. Możesz wymusić sprawdzenie w panelu AdSense (Witryny → Sprawdź ponownie).

### Q: Co jeśli nadal pokazuje "Nie znaleziono"?
**A:** 
1. Sprawdź czy zmiana w Vercel została zapisana
2. Wyczyść cache: `vercel cache purge --yes`
3. Poczekaj 48h i sprawdź ponownie
4. Zweryfikuj zewnętrznie: https://adstxt.guru/mo-kebap.de

---

## 🎯 Podsumowanie

**Problem:** Przekierowanie 307 blokuje Google AdSense  
**Rozwiązanie:** Usuń redirect, ustaw obie domeny na Production  
**Rezultat:** ads.txt dostępny bez przekierowań  
**Efekt:** Google AdSense zaakceptuje witrynę w ciągu 24-48h  

---

**Ostatnia aktualizacja:** 26 listopada 2025  
**Status:** Instrukcja gotowa do wykonania
