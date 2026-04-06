# Edson's Portfolio

My personal portfolio website built with React and TypeScript. It showcases my projects, experience, and skills with a clean, responsive design and smooth animations.

Live at: [your-url-here]

## Tech Stack

- **React 18** + **TypeScript** — component-based UI with full type safety
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — page transitions and animations
- **React Router** — client-side routing
- **Shadcn/ui** — accessible UI components built on Radix UI
- **React Hook Form** + **Zod** — form handling and validation
- **Sonner** — toast notifications

## Project Structure

```
src/
├── components/
│   ├── sections/           # Page sections (About, Projects, Experience, Contact)
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                 # Reusable UI primitives (button, card, input...)
│   ├── PortfolioLayout.tsx # Main layout wrapper
│   ├── PortfolioSidebar.tsx# Sidebar nav with profile & links
│   └── theme-provider.tsx  # Light/dark theme context
├── pages/
│   ├── Index.tsx           # Home page
│   ├── Projects.tsx        # Full projects list
│   ├── Resume.tsx          # Resume preview
│   └── NotFound.tsx        # 404 page
├── hooks/                  # Custom hooks (mobile detection, toast)
├── lib/                    # Utility functions
├── assets/                 # Images and static files
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
# Clone and install
git clone <YOUR_GIT_URL>
cd portfolio-website
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## License

Personal use. Feel free to take inspiration for your own portfolio.
