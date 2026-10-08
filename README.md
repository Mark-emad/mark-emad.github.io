# Mark Emad Sidhom — Mobile Application Developer Portfolio

A personal portfolio website engineered specifically for **Mark Emad Sidhom**, Mobile Application Developer specializing in Flutter & Dart and expanding into Native Android with Kotlin & Jetpack Compose.

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Features

- **Mobile-First Identity & Aesthetics**: Dark-first palette (charcoal/near-black + electric cyan accent) with high-fidelity smartphone, Android TV, and dual-phone mockup frames.
- **Interactive Device Simulator**: Floating smartphone hero mockup featuring live interactive tabs (App UI, BLoC State Tree, Dio Network trace).
- **Split Layout About & Identity Matrix**: Clear visual distinction between practical commercial experience (`✓`) and active growth technologies (`↗`).
- **Featured Commercial Work**:
  - **RX-Medecia**: Smart Pharmacy Inventory System (Flutter, BLoC, Dio, SharedPreferences).
  - **Diggitsy**: Cloud Digital Signage for Android TV (16:9 widescreen TV mockup).
  - **Cravio.ai**: Commercial Online Ordering System (Dual phone customer + restaurant app with background thermal printing).
- **Interactive Case Study Modals**: In-depth project walkthroughs with architecture, deliverables, and screenshot replacement areas.
- **Chronological Experience Timeline**: Numbered markers detailing commercial experience, freelance work, and professional DEBI training.
- **Kotlin & Jetpack Compose Expansion Section**: Highlighting Android growth without exaggerating senior seniority.
- **Seamless CV Download & One-Click Contact**: Direct link to `Mark_Emad_CV.pdf`, one-click email copying with clipboard feedback, and direct links to LinkedIn & GitHub.
- **Theme Switcher**: Dark mode (default) and clean light mode toggle.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Build Tool**: Vite
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Button.tsx               # Reusable styled button component
│   ├── HeroDeviceMockup.tsx     # Interactive smartphone simulator
│   ├── Icons.tsx                # Brand SVGs (GitHub, LinkedIn)
│   ├── Navbar.tsx               # Sticky blurred navbar + mobile drawer sheet
│   ├── ProjectCard.tsx          # Editorial project card with device mockups
│   ├── ProjectMockupView.tsx    # Phone, TV, and Dual-Phone device frames
│   ├── ProjectModal.tsx         # Detailed case study dialog
│   ├── SectionHeading.tsx       # Typography and category tag system
│   └── SkillCard.tsx            # Grouped technical skill cards
│
├── sections/
│   ├── Hero.tsx                 # Headline, CTAs, pills, and hero simulator
│   ├── About.tsx                # Narrative and Developer Identity Card
│   ├── Skills.tsx               # 5 grouped skill cards
│   ├── Projects.tsx             # Featured projects list & modal state
│   ├── Experience.tsx           # Vertical numbered timeline
│   ├── Learning.tsx             # Kotlin & Jetpack Compose expansion
│   ├── Education.tsx            # B.Sc. in Computer Science
│   ├── Contact.tsx              # Direct contact CTAs and copy email button
│   └── Footer.tsx               # Minimal footer and copyright
│
├── data/
│   ├── portfolioData.ts         # Central configuration for all content
│   ├── projects.ts              # Projects export
│   ├── skills.ts                # Skills export
│   └── experience.ts            # Experience export
│
└── App.tsx                      # Root application with theme toggle
```

---

## ⚙️ Development & Build

### Install Dependencies
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
The optimized bundle will be generated in `dist/`.

---

## 📸 How to Add Your Real Project Screenshots

1. Place your PNG/JPG screenshot files inside `public/projects/rx-medecia/`, `public/projects/diggitsy/`, and `public/projects/cravio/`.
2. Open [`src/data/portfolioData.ts`](file:///e:/Portfolio/mark-emad/src/data/portfolioData.ts).
3. Update the `projects` entries with your screenshot paths or custom case study links.
