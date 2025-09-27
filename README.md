# Login Dashboard (Next.js + TypeScript + SCSS Modules)

A minimal login → dashboard flow built with **Next.js App Router**, **TypeScript**, and **SCSS Modules**.  
It validates an Iranian mobile number, simulates authentication (mock user persisted in `localStorage`), protects the dashboard route, and provides a logout button.

> This README replaces the default *create-next-app* boilerplate and describes the actual app behavior.

---

## ✨ Features
- **Next.js App Router (v15)** + **React 19**
- **TypeScript** throughout
- **SCSS Modules** for component‑scoped styling
- **Zod** validation (Iran mobile format: `^09\d{9}$`)
- **Auth Context** with `AuthProvider` (user state + loading state)
- **Route protection**: unauthenticated users are redirected to `/auth`
- **Mock login**: stores a user object in `localStorage`
- **Logout**: clears user and redirects back to `/auth`
- **RTL-friendly** font (Vazir) included

---

## 🧱 Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- SCSS Modules
- Zod

---

## 📁 Project Structure (high level)
```
.
├─ src/
│  ├─ app/
│  │  ├─ page.tsx               # redirect based on auth → /auth or /dashboard
│  │  ├─ client.tsx             # client redirect logic
│  │  ├─ layout.tsx             # wraps pages with AuthProvider
│  │  ├─ auth/
│  │  │  ├─ page.tsx
│  │  │  └─ client.tsx          # renders <LoginForm />
│  │  └─ dashboard/
│  │     ├─ page.tsx
│  │     └─ client.tsx          # protected dashboard; shows user & logout
│  ├─ components/
│  │  ├─ Form/LoginForm.tsx
│  │  ├─ Input/Input.tsx
│  │  └─ LogoutBotton/LogoutButton.tsx
│  ├─ context/AuthProvider.tsx   # user state, persistence via localStorage
│  └─ lib/validation.ts          # zod schema for phone input
├─ public/                       # assets + Vazir font
├─ package.json
└─ next.config.ts
```

---

## 🚀 Getting Started

### 1) Install
```bash
npm i
```

### 2) Run
```bash
npm run dev
# open http://localhost:3000
```

No environment variables are required.

---

## 🔐 Authentication Flow (Mocked)
1. **Login** at `/auth`
   - Enter a mobile number that matches `^09\d{9}$` (e.g. `09123456789`).
   - On success, a mock user object is stored in `localStorage`.
2. **Redirects**
   - Visiting `/` checks user state and redirects:
     - **No user** → `/auth`
     - **User exists** → `/dashboard`
3. **Dashboard** at `/dashboard`
   - Greets the user and shows profile info (from stored user object).
4. **Logout**
   - Clears `localStorage` user and redirects to `/auth`.

> Note: This project intentionally **does not** call a real backend. It demonstrates front-end auth flow structure only.

---

## 🧪 Validation
- `src/lib/validation.ts` defines:
```ts
phone: z.string().regex(/^09\d{9}$/, "Phone number must start with 09 and be 11 digits")
```

---

## 🧹 Scripts
```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # start production server
npm run lint    # lint
```

---

## 🗺️ Roadmap / Ideas
- Replace mock localStorage with a real OTP API (e.g., Fastify + Redis)
- Add form states (pending/disabled) and toasts
- Add protected API routes and SSR session checks
- Add unit tests (components & context) and Playwright E2E tests
- i18n (English/Persian) and accessibility improvements

---

## 📜 License
MIT
