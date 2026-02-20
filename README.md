# Premium Authentication UI

A beautiful login/signup interface built with Next.js, featuring obsidian dark theme, gold accents, and glassmorphic design with backdrop filters.

## ✨ Features

- 🎨 Obsidian & gold color palette
- 🔮 Glassmorphic backdrop blur design
- ✨ Animated gradient background
- 📱 Fully responsive
- 🔄 Login/signup toggle
- 👁️ Password visibility toggle
- 🔗 Google & GitHub buttons
- ♿ Accessible form inputs

## 🚀 Quick Start

### 1. Create Next.js Project
```bash
npx create-next-app@latest auth-ui --typescript --tailwind
cd auth-ui
```

### 2. Install Dependencies
```bash
npm install lucide-react
```

### 3. Copy Files
- Copy `page.jsx` → `src/app/page.tsx`
- Copy `tailwind.config.js` → `tailwind.config.ts`
- Update `src/app/globals.css` with tailwind directives

### 4. Run
```bash
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

## 📦 What's Included

- Complete authentication UI component
- Tailwind CSS configuration
- lucide-react icons (Mail, Lock, User, Eye, GitHub)
- Responsive design
- Dark theme with animations

## 🎨 Customize

**Change colors:** Replace `amber` with `emerald`, `blue`, `purple`, etc.

**Adjust blur:** Change `backdrop-blur-2xl` to `backdrop-blur-sm/md/lg/3xl`

**Connect backend:** Update `handleSubmit` function with your API endpoint

## 🔌 Backend Integration

Update the `handleSubmit` function in `page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name: isLogin ? undefined : name }),
  });
  // Handle response...
};
```

## 📚 Documentation

- `QUICK_START.md` - 5-minute setup guide
- `README.md` - Detailed documentation
- `INTEGRATION_GUIDE.md` - Backend integration examples
- `.env.example` - Environment variables template

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Language:** TypeScript
- **Features:** React Hooks, CSS backdrop-filter

## 📋 Browser Support

✅ Chrome, Firefox, Safari, Edge (all modern versions)

## 📝 License

Open source - Free to use and modify

---

**Get started in 2 minutes:** Copy the component, run dev server, customize colors. Done! 🎉
