# 🎯 INSTRUKCJA: Jak uzyskać prawdziwe Slot IDs z Google AdSense

## Krok 1: Zaloguj się do Google AdSense
Wejdź na: https://www.google.com/adsense

## Krok 2: Dodaj swoją stronę (jeśli nie dodana)
1. Przejdź do **"Witryny"** (Sites)
2. Kliknij **"Dodaj witrynę"** (Add site)
3. Wprowadź: **mo-kebap.de**
4. Skopiuj kod AdSense (już jest w index.html)

## Krok 3: Utwórz jednostki reklamowe (Ad Units)

### 📱 Jednostka 1: Banner Homepage (Horizontal)
1. Przejdź do **"Reklamy"** → **"Według jednostki reklamowej"**
2. Kliknij **"Nowa jednostka reklamowa"**
3. Wybierz **"Reklama displayowa"**
4. Nazwa: `MO-KEBAP Homepage Banner`
5. Typ: **Responsywna** (Responsive)
6. Rozmiar: **Automatyczny** (Horizontal)
7. Kliknij **"Utwórz"**
8. **SKOPIUJ SLOT ID** (np. 1234567890)

### 📄 Jednostka 2: Menu - Between Content
1. Nowa jednostka reklamowa
2. Nazwa: `MO-KEBAP Menu Between Content`
3. Typ: **Responsywna**
4. Rozmiar: **Horizontal**
5. **SKOPIUJ SLOT ID**

### 📦 Jednostka 3: Menu Sidebar (Rectangle)
1. Nowa jednostka reklamowa
2. Nazwa: `MO-KEBAP Menu Sidebar`
3. Typ: **Responsywna** lub **300x250**
4. Rozmiar: **Rectangle/Square**
5. **SKOPIUJ SLOT ID**

### 🦶 Jednostka 4: Footer Banner
1. Nowa jednostka reklamowa
2. Nazwa: `MO-KEBAP Footer Banner`
3. Typ: **Responsywna**
4. Rozmiar: **Horizontal**
5. **SKOPIUJ SLOT ID**

---

## Krok 4: Zamień Slot IDs w kodzie

### OBECNE (PLACEHOLDER) → NOWE (PRAWDZIWE)

Po uzyskaniu prawdziwych Slot IDs z AdSense, wykonaj:

```powershell
# W terminalu PowerShell w folderze projektu:
notepad src/pages/Home.jsx
notepad src/pages/Menu.jsx
notepad src/components/Footer.jsx
```

### 🔍 Gdzie są placeholdery:

#### 1️⃣ `src/pages/Home.jsx` - linia ~127
```jsx
<AdSense slot="1234567890" format="horizontal" />
```
**Zamień na:** Twój prawdziwy Slot ID z jednostki "Homepage Banner"

#### 2️⃣ `src/pages/Menu.jsx` - linia ~22
```jsx
<AdSense slot="5555555555" format="horizontal" />
```
**Zamień na:** Twój prawdziwy Slot ID z jednostki "Menu Between Content"

#### 3️⃣ `src/pages/Menu.jsx` - linia ~31
```jsx
<AdSense slot="6666666666" format="rectangle" responsive={false} style={{ minHeight: '250px' }} />
```
**Zamień na:** Twój prawdziwy Slot ID z jednostki "Menu Sidebar"

#### 4️⃣ `src/components/Footer.jsx` - linia ~12
```jsx
<AdSense slot="9876543210" format="horizontal" />
```
**Zamień na:** Twój prawdziwy Slot ID z jednostki "Footer Banner"

---

## Krok 5: Wdróż zmiany

Po zamianie wszystkich Slot IDs:

```powershell
npm run build
vercel --prod
```

---

## ⏱️ Czas na zatwierdzenie AdSense

Po wdrożeniu z prawdziwymi Slot IDs:
- Google sprawdzi Twoją stronę (24-48h)
- Zweryfikuje ads.txt
- Zatwierdzi stronę do wyświetlania reklam

## ✅ Sprawdzenie

Po 2-3 dniach sprawdź w AdSense Dashboard:
- Status witryny: "Gotowa" (Ready)
- Wyświetlenia reklam: Powinny zacząć się wyświetlać
- Przychody: Po kilku dniach pojawią się pierwsze dane

---

## 🚨 WAŻNE

1. **NIE KLIKAJ** we własne reklamy (ban od Google!)
2. **NIE PROŚ** znajomych o klikanie (ban!)
3. Poczekaj na naturalny ruch organiczny
4. Wypełnij dane podatkowe w AdSense

---

## 📞 Potrzebujesz pomocy?

Jeśli masz prawdziwe Slot IDs, powiedz mi:
```
Slot 1 (Homepage): TWÓJ_SLOT_ID
Slot 2 (Menu): TWÓJ_SLOT_ID
Slot 3 (Sidebar): TWÓJ_SLOT_ID
Slot 4 (Footer): TWÓJ_SLOT_ID
```

I zamienię je automatycznie w kodzie! 🚀
