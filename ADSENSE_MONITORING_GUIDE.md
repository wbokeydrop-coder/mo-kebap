# 📈 PRZEWODNIK MONITOROWANIA AdSense dla www.mo-kebap.de

**Dokument:** Quick Reference Guide  
**Data:** 2 stycznia 2026  
**Cel:** Łatwy dostęp do instrukcji monitorowania i optymalizacji

---

## 🎯 Co Monitorować

### Główne Metryki (co tydzień)

| Metryka | Normalne | Alarmujące | Akcja |
|---|---|---|---|
| **Impressions** | 100+ dziennie | <50 dziennie | Sprawdzić uprawnienia AdSense |
| **CTR** | 0.5-2% | <0.1% | Zmienić pozycję lub format |
| **RPM** | $2-10 | <$1 | Ocenić traffic quality |
| **Viewability** | >50% | <30% | Przeanalizować layout |
| **CLS** | <0.1 | >0.25 | Sprawdzić placeholdery |

---

## 📊 Panel AdSense - Gdzie Szukać

### 1. Główne Raporty
```
Raporty
├── Przychód
│   ├── Strona dziennie
│   ├── Podsumowanie jednostek reklamowych
│   └── Wymiary niestandardowe (kanały!)
├── Wrażenia i kliknięcia
└── Metryki wydajności
```

### 2. Wymiary Niestandardowe (WAŻNE!)
```
Raporty → Wymiary niestandardowe
├── Ad Channel (nasza konfiguracja)
│   ├── hero-auto (Hero Ad)
│   ├── menu-infeed (Menu Ads)
│   ├── contact-infeed (Contact Ad)
│   ├── footer-auto (Footer Ad)
│   ├── anchor-mobile (Mobile Anchor)
│   ├── layoutkey-control (A/B Test Control)
│   └── layoutkey-variant (A/B Test Variant)
```

### 3. Metryki Ważne
```
Metryki wydajności
├── RPM (Revenue per 1000 impressions)
├── CTR (Click-Through Rate)
├── CPC (Cost Per Click)
└── Viewability (% visible)
```

---

## 🔍 Checklist Monitorowania Dziennego (5 min)

Każdego dnia o 10:00 rano:

- [ ] Otworzyć AdSense panel: https://www.google.com/adsense/app
- [ ] Sprawdzić "Podsumowanie" (Today's earnings)
- [ ] Sprawdzić czy są jakieś alerty (czerwone flagi)
- [ ] Odnotować dzisiejsze impressions i clicki
- [ ] Jeśli <50 impressions: sprawdzić traffic

---

## 📋 Checklist Monitorowania Tygodniowego (30 min)

Każdy poniedziałek rano:

### 1. Raport Przychodów
- [ ] Otworzyć **Raporty** → **Przychód**
- [ ] Wybrać ostatni 7 dni
- [ ] Znotować: Total Earnings, Impressions, Clicks
- [ ] Obliczyć: RPM = (Earnings × 1000) / Impressions
- [ ] Porównać z poprzednim tygodniem

### 2. Wymiary Niestandardowe
- [ ] Otworzyć **Raporty** → **Wymiary niestandardowe**
- [ ] Wybierz wymiar: **Ad Channel**
- [ ] Dla każdego kanału znotuj:
  - Impressions
  - Clicks
  - Earnings
  - CTR = (Clicks / Impressions) × 100
  - RPM = (Earnings × 1000) / Impressions

**Szablon do notatki:**

```
Tygodnia z [DATA]:
Hero Auto:      Impr: ___ | Clicks: ___ | RPM: $___ | CTR: ___%
Menu In-Feed:   Impr: ___ | Clicks: ___ | RPM: $___ | CTR: ___%
Contact In-Feed: Impr: ___ | Clicks: ___ | RPM: $___ | CTR: ___%
Footer Auto:    Impr: ___ | Clicks: ___ | RPM: $___ | CTR: ___%
Mobile Anchor:  Impr: ___ | Clicks: ___ | RPM: $___ | CTR: ___%
```

### 3. A/B Test (Layout-Key)
- [ ] Otworzyć **Wymiary niestandardowe** → filtruj `layoutkey-*`
- [ ] Porównaj Control vs Variant:
  - RPM różnica: ___% 
  - CTR różnica: ___% 
  - Winner: ☐ Control ☐ Variant ☐ Nieznany
- [ ] Notuj trend (który wariant wygrywa)

### 4. Traffic Analysis
- [ ] Otworzyć Google Analytics
- [ ] Sprawdzić Sessions, Users, Pageviews
- [ ] Porównaj z poprzednim tygodniem
- [ ] Klikaj różne kanały (organic, direct, social)

---

## 📈 Checklist Monitorowania Miesięcznego (1 godzina)

Pierwszy dzień miesiąca rano:

### 1. Ogólne Wyniki
- [ ] Skopiować wyniki z 4 tygodni
- [ ] Obliczyć średni dziennie earnings
- [ ] Obliczyć średni RPM
- [ ] Porównać z poprzednim miesiącem

### 2. Ranking Umiejscowień (najlepsze do najgorszych)

Tabela na podstawie tygodniowych danych RPM:

```
Ranking RPM (Najbardziej dochodowy):
1. Mobile Anchor:   $____ (najczęściej ⭐⭐⭐⭐⭐)
2. Hero Auto:       $____
3. Menu In-Feed:    $____
4. Contact In-Feed: $____
5. Footer Auto:     $____

🏆 Best Performer: ________________
❌ Worst Performer: ________________
```

### 3. Decyzja A/B Test
Po 4+ tygodniach:
- [ ] Porównaj Total Earnings:
  - Control: $_____
  - Variant: $_____
  - Różnica: _____% (winner!)
- [ ] Decyzja: 
  - [ ] Utrzymaj Control
  - [ ] Zmień na Variant
  - [ ] Testuj dalej (dane niewystarczające)

### 4. Optymalizacje do Przetestowania
- [ ] Czy któraś reklama ma RPM <$2? → Zmienić format/pozycję
- [ ] Czy CTR jest <0.5%? → Zbyt mało widoczna
- [ ] Czy viewability <30%? → Nie widać reklamy
- [ ] Czy CLS >0.1? → Problem z layoutem

---

## 🚨 Alerting (Co robić gdy...)

### ❌ Impressions spadły 50%+
1. Sprawdzić Google Analytics - traffic ok?
2. Sprawdzić AdSense - brak notyfikacji błędu?
3. Jeśli traffic ok - czekać, może anomalia
4. Jeśli traffic spadł - powód: sezonowość/marketing

### ❌ RPM spadł 50%+
1. Sprawdzić czy traffic się zmienił (inna demografia?)
2. Sprawdzić formaty - może zmienić format?
3. Czekać kilka dni (RPM jest zmienny)
4. Rozważyć zmianę pozycji reklamy

### ❌ Zero impressions dzisiaj
1. Sprawdzić czy witryna jest online
2. Sprawdzić Console w DevTools (błędy JS?)
3. Sprawdzić czy ciasteczka działają
4. Czekać 24h na propagację

### ✅ Wysoki RPM dzisiaj
1. Nie bądzieć się! To możliwe (np. premium ads)
2. Notować co się zmieniło (traffic, traffic source)
3. Spróbować powtórzyć (więcej marketing → wyższy RPM)
4. Obserwować czy się utrzyma

---

## 🔧 Kiedy Wprowadzać Zmiany

### ✅ BEZPIECZNE - możliwość zmiany bez ryzyka
- Zmiana pozycji reklamy (jeśli inne umiejscowienia to dozwolą)
- Zmiana kanału dla istniejącej reklamy
- Zmiana formatu (auto → fluid)
- Zmiana placeholdera wysokości

### ⚠️ RYZYKOWNE - czekaj na potwierdzenie
- Dodanie nowej reklamy (max 3 per strona!)
- Usunięcie reklamy (może spadać dochód)
- Zmiana slotu (musisz mieć nowy slot!)
- Zmiana layout struktury strony

### ❌ ZAKAZANE - nigdy tego nie robić
- Klikanie własne na reklamy
- Zachęcanie użytkowników do klików
- Ukrywanie reklam w small print
- Zmiana slot IDs bez powodu (ban!)

---

## 📱 Monitorowanie Mobile vs Desktop

### Splitting danych w Analytics/AdSense:

1. Otworzyć **Raporty** → **Wymiary**
2. Dodać wymiar: **Device Category** 
3. Filtruj: desktop, mobile, tablet

**Cele:**
- RPM na mobile powinien być podobny do desktop
- CTR na mobile może być wyższy (anchor ad!)
- Impressions na mobile mogą rosnąć (anchor ad!)

**Tabela Template:**

```
Device      | Impressions | CTR  | RPM  | Earnings
Desktop     | ________    | __% | $__  | $____
Mobile      | ________    | __% | $__  | $____
Tablet      | ________    | __% | $__  | $____
TOTAL       | ________    | __% | $__  | $____
```

---

## 💡 Porady Optymalizacji

### Jeśli RPM jest niski (<$2):
1. ✅ Sprawdzić viewability (musi być >50%)
2. ✅ Zmienić format z rectanglular na auto/fluid
3. ✅ Zmienić pozycję reklamy (wyżej = wyższy RPM)
4. ✅ Sprawdzić czy traffic jest quality (locals vs visitors)

### Jeśli CTR jest niski (<0.5%):
1. ✅ Sprawdzić czy reklama jest widoczna (nie covered)
2. ✅ Sprawdzić czy reklama ma ścieżkę do kliknięcia
3. ✅ Zmienić pozycję (może być zbyt niska na stronie)
4. ✅ Zmienić format (auto formatty na mobilach mają wyższy CTR)

### Jeśli traffic rośnie, ale earnings stagnacja:
1. ✅ Sprawdzić czy nowy traffic jest quality
2. ✅ Sprawdzić czy nuevy traffic jest mobile (niższe RPM)
3. ✅ Sprawdzić czy AdSense czeka na approval nowych jednostek
4. ✅ Czekać 2-4 tygodnie (machine learning)

### Jeśli Anchor Ad nie działa:
1. ✅ Sprawdzić DevTools czy się renderuje
2. ✅ Sprawdzić czy `window.innerWidth < 768` (mobilne?)
3. ✅ Sprawdzić czy consent zaakceptowany
4. ✅ Sprawdzić localStorage `adsense-layoutkey-test`

---

## 🛠️ Narzędzia Pomocne

### W przeglądarce (DevTools)
```javascript
// Sprawdzić czy reklamy ładują
console.log(window.adsbygoogle)

// Sprawdzić consent
localStorage.getItem('cookieConsent')

// Sprawdzić A/B test assignment
localStorage.getItem('adsense-layoutkey-test')

// Force push reklam (dev only)
(window.adsbygoogle = window.adsbygoogle || []).push({})
```

### Google Analytics - segmenty
- Filtruj po device type
- Filtruj po traffic source
- Filtruj po country
- Porównaj z AdSense revenue

### Google Search Console
- **Performance** → sprawdzić impressions vs clicks
- **Coverage** → brak indexing issues?
- **Core Web Vitals** → LCP/FID/CLS wszystko ok?

---

## 📞 Co Robić Gdy Coś Pójdzie Nie Tak

### Brak wrażeń po 48 godzinach
1. Sprawdzić https://support.google.com/adsense/answer/10895
2. Sprawdzić czy domena zweryfikowana
3. Sprawdzić czy slot ID prawidłowy
4. Skontaktować się z Google Support

### AdSense warning/alert
1. Przeczytaj alert dokładnie
2. Przejrzyj wszystkie wymogi
3. Wprowadź poprawki ASAP
4. Przesłij na review jeśli potrzeba

### Niska viewability
1. Sprawdzić CLS w PageSpeed Insights
2. Zmienić rozmiar placeholdera
3. Sprawdzić czy adblock nie blokuje
4. Zmienić pozycję (wyżej = wyższa viewability)

---

## 📋 Szablon Notatki Tygodniowej

Skopiuj, wypełnij, zachowaj w notesie:

```markdown
## Tydzień z [DATA POCZĄTKOWA] do [DATA KOŃCOWA]

### 📊 Podsumowanie
- Total Earnings: $______
- Total Impressions: ________
- Total Clicks: _______
- Average RPM: $______
- Average CTR: _____%

### 💰 Po Kanałach
| Kanał | Earnings | Impr | CTR | RPM |
|---|---|---|---|---|
| hero-auto | $____ | ___ | __% | $__ |
| menu-infeed | $____ | ___ | __% | $__ |
| contact-infeed | $____ | ___ | __% | $__ |
| footer-auto | $____ | ___ | __% | $__ |
| anchor-mobile | $____ | ___ | __% | $__ |

### 🎯 A/B Test
- Control Earnings: $____
- Variant Earnings: $____
- Winner: ☐ Control ☐ Variant ☐ TBD

### 🚀 Spostrzeżenia
- Najlepszy performer: ___________
- Gorszeje performer: ___________
- Co się zmieniło vs zeszły tydzień: ___________

### 🔄 Działania na Następny Tydzień
- [ ] ...
- [ ] ...
```

---

## ⏰ Harmonogram Zadań

```
CODZIENNIE (2 min):
  09:00 - Check alerts in AdSense panel

CO TYDZIEŃ (30 min):
  Poniedziałek 10:00 - Full weekly report
  
CO MIESIĄCU (1 hour):
  1st of month - Monthly analysis + A/B decision

CO KWARTALE (2 hours):
  Day 1 - Quarterly strategy review
  - Czy trend rośnie czy pada?
  - Czy A/B test trwa za długo?
  - Czy testy nowych formatów?
```

---

**Pytania? Odwołaj się do:** `ADSENSE_OPTYMALIZACJA_RAPORTU.md`

**Last Updated:** 2 stycznia 2026
