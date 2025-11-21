# 👀 At A Glance - Quick Reference

## Pizzeria Münsingen - Instant Cheat Sheet

---

## ⚡ Ultra Quick Start (30 seconds)

```bash
npm install && npm run dev
```
→ Opens at http://localhost:5173

---

## 📂 File You'll Edit Most

| Task | File | Line |
|------|------|------|
| Change colors | `src/assets/styles.css` | 2-8 |
| Add pizza | `src/data/menu.json` | Add object |
| Change name | `src/components/Header.jsx` | 19 |
| Home text | `src/pages/Home.jsx` | 18-23 |
| Contact info | `src/pages/Contact.jsx` | 13-28 |

---

## 🎨 Color Quick Reference

```
Gold:    #F5B301  [Primary CTA, Accents]
Dark:    #1a1a1a  [Background]
Darker:  #0d0d0d  [Cards, Header]
Light:   #e5e5e5  [Text]
Muted:   #a0a0a0  [Secondary text]
Orange:  #ff6b35  [Delete buttons]
```

---

## 📁 Essential Files

```
src/
├── assets/styles.css         ← ALL STYLES HERE
├── data/menu.json            ← MENU DATA
├── components/Header.jsx     ← LOGO + NAV
├── pages/Home.jsx            ← HERO SECTION
└── context/CartContext.jsx   ← CART LOGIC
```

---

## 🛠️ Common Tasks (Copy-Paste Ready)

### Add New Pizza
```json
// In menu.json, add:
{
  "id": "p5",
  "name": "Your Pizza",
  "category": "Pizza",
  "price": 12.50,
  "description": "Your ingredients",
  "image": "/images/pizzas/your-pizza.jpg"
}
```

### Change Primary Color
```css
/* In styles.css, line 3: */
--primary-gold: #YOUR_COLOR;
```

### Change Restaurant Name
```jsx
// In Header.jsx, line 19:
<h1>YOUR RESTAURANT NAME</h1>
```

---

## 🔧 Terminal Commands

| Command | What it does |
|---------|--------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `Ctrl + C` | Stop dev server |

---

## 📱 Responsive Breakpoints

```
Mobile:   < 768px
Tablet:   768px - 800px
Desktop:  > 800px
```

---

## 🚀 Deploy in 3 Commands

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 🖼️ Image Requirements

| Type | Size | Location |
|------|------|----------|
| Hero BG | 1920x1080 | `public/images/pizzas/margherita.jpg` |
| Menu Items | 800x600 | `public/images/pizzas/*.jpg` |

Free images: See `FREE_IMAGES.md`

---

## 🐛 Top 3 Issues & Fixes

### 1. Images not showing
```
✓ Check: public/images/pizzas/filename.jpg
✓ Exact filename match in menu.json
✓ Hard refresh: Ctrl + Shift + R
```

### 2. CSS not updating
```
✓ Save file: Ctrl + S
✓ Clear cache: Ctrl + Shift + R
✓ Restart: Ctrl+C then npm run dev
```

### 3. Build fails
```
✓ Delete node_modules
✓ npm install
✓ npm run build
```

---

## 📚 Docs Quick Links

| Need | Read |
|------|------|
| Setup | QUICK_START.md (5 min) |
| Images | FREE_IMAGES.md |
| Deploy | DEPLOYMENT.md |
| Help | FAQ.md |
| Structure | PROJECT_STRUCTURE.md |

---

## 🎯 Production Checklist (1 min)

```
□ Images added
□ Menu updated  
□ Contact info changed
□ Restaurant name updated
□ Tested on mobile
□ Run npm run build
□ Deploy!
```

---

## 💡 Pro Tips

1. **Use CSS Variables** - Easy theme switching
2. **Keep menu.json clean** - One source of truth
3. **Test mobile first** - Most users on phones
4. **Optimize images** - Use TinyPNG before upload
5. **Version control** - Git commit often

---

## 🔗 Quick Links

```
Dev Server:   http://localhost:5173
Build Output: dist/
Docs Folder:  Root directory (14 .md files)
```

---

## 📞 Emergency Contacts

```
React Docs:     react.dev
Vite Docs:      vitejs.dev
CSS Reference:  css-tricks.com
Free Images:    unsplash.com
```

---

## ⌨️ VS Code Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl + S` | Save |
| `Ctrl + P` | Quick file open |
| `Ctrl + Shift + F` | Search all files |
| `Alt + Up/Down` | Move line |
| `Ctrl + /` | Toggle comment |

---

## 🎨 Component Quick Map

```
App.jsx
  ├─ Header
  │    └─ Logo + Nav + Cart
  ├─ Routes
  │    ├─ Home (Hero)
  │    ├─ Menu (Grid + Cart)
  │    ├─ Order (Form)
  │    └─ Contact (Info)
  └─ Footer
```

---

## 💻 Browser DevTools (F12)

```
Console:   See errors
Network:   Check image loading
Elements:  Inspect CSS
Mobile:    Toggle device toolbar
```

---

## 🔥 One-Liners

```bash
# Full reset
rm -rf node_modules && npm install

# Production preview
npm run build && npm run preview

# Deploy with one command
vercel --prod
```

---

## 📊 Project Stats

```
Files:     ~25 (code + docs)
Lines:     ~2,000
Size:      ~500KB (without node_modules)
Load:      < 2 seconds
Mobile:    ✓ Optimized
```

---

## ✅ Daily Workflow

```
1. npm run dev
2. Edit files
3. Save (auto-reload)
4. Check browser
5. Commit changes
```

---

## 🎓 Learn More

```
React:         30 min → react.dev/learn
Context API:   15 min → react.dev/learn/passing-data-deeply
Router:        20 min → reactrouter.com/docs
Vite:          10 min → vitejs.dev/guide
```

---

## 🌟 Feature Status

```
✅ Done:        Cart, Menu, Order, Responsive
🔄 Optional:    Payments, Backend, Auth
🔮 Future:      Admin, Reviews, Loyalty
```

---

## 📦 Package.json Scripts

```json
{
  "dev": "Start development",
  "build": "Create production build",
  "preview": "Preview production build"
}
```

---

## 🎯 Project Goals

```
[✓] Modern design
[✓] Dark theme
[✓] Fast performance
[✓] Easy to use
[✓] Well documented
[✓] Production ready
```

---

## 💬 Common Questions (Ultra Short)

**Q: Where add images?**  
A: `public/images/pizzas/`

**Q: How change color?**  
A: `styles.css` line 3

**Q: Deploy where?**  
A: Vercel (free, easy)

**Q: Mobile works?**  
A: Yes, fully responsive

**Q: Need backend?**  
A: Optional (for payments)

**Q: Cost?**  
A: $0 (hosting + code free)

---

## 🚀 Success Path

```
Install → Add Images → Customize → Test → Deploy
  ↓         ↓            ↓          ↓       ↓
 2min      5min         10min      5min    5min
                                           
Total Time: 30 minutes to live site!
```

---

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║  🍕 PIZZERIA MÜNSINGEN                            ║
║                                                   ║
║  Ready to launch in 30 minutes                   ║
║                                                   ║
║  Questions? → FAQ.md                             ║
║  Issues?    → Troubleshooting section            ║
║  Help?      → DOCUMENTATION_INDEX.md             ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

**Last Updated:** November 7, 2024  
**Version:** 2.0.0  
**Print this page for quick reference!**
