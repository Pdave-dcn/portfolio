# Personal Portfolio Website

A multilingual personal portfolio built with **Next.js**, showcasing selected projects and a design‑focused approach to full‑stack engineering. This site is designed to be accessible to a diverse audience by supporting multiple languages and prioritizing clean architecture, performance, and thoughtful UI.

**Live site:** [https://pdaaave.vercel.app/](https://pdaaave.vercel.app/)

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (global state management)
- **Motion** (animations)

---

## Key Features

- 🌍 **Multilingual content architecture** (English, French, Spanish)
- 💾 **Persisted language preference** using Zustand
- 🧩 **Clear separation of concerns** between UI, content, and data
- 📱 **Fully responsive layout** for mobile, tablet and desktop
- ♿ **Accessible, motion‑aware UI components**

---

## Architecture Notes

This project intentionally avoids heavy i18n libraries in favor of a lightweight, explicit content model:

- Human‑readable copy is scoped per language
- Stable metadata (links, project IDs, URLs) is language‑agnostic
- Section headings are isolated to minimize translation overhead
- Content is normalized to reduce duplication and improve maintainability
- Global language state is handled with Zustand and persisted across sessions

This approach keeps the UI simple while making the content layer scalable and easy to extend.

---

## Future Improvements

- Add Haitian Creole language support
- SEO‑friendly language routing
- Content validation for missing translations
- Playground page (experiments and discoveries)

---

## About

This portfolio reflects my approach to software development: clean engineering, thoughtful design, and systems that scale gracefully. It serves both as a personal showcase and as an exploration of real‑world architectural decisions in modern web development.

---

## Acknowledgements

This portfolio was heavily inspired by the work of **Adam Stoddard** and his personal website.

The low-contrast palette, clean layouts, and subtle 90’s-inspired aesthetic immediately resonated with me. I was particularly drawn to the sleek minimalism, the confident use of large typography, and the smooth, restrained animations that give the interface character without overwhelming the content.

The hero section of this site is a direct nod to Adam’s approach — bold, expressive, and unapologetically simple. While exploring his site and reading through his notes, I also discovered **css-doodle**, an experimental CSS library that deeply influenced how I think about creative visuals on the web.

This project is not a replica, but rather a personal interpretation shaped by those inspirations and adapted to my own voice, goals, and technical decisions.

Inspired by: [https://aaadaaam.com/](https://aaadaaam.com/)

---

## License & Usage

This portfolio’s source code is publicly available for transparency, learning, and inspiration.

You are welcome to explore the codebase, study how features are implemented, and reuse **individual ideas or patterns** for educational or non‑commercial purposes.

However, this project is **not intended to be copied, cloned, or reused in full as a personal portfolio or commercial product**. This includes copying the overall structure, layout, visual identity, content, or design system to present it as your own work.

While this site was inspired by other creators, including Adam Stoddard, the implementation, structure, and decisions in this codebase were independently designed and built. The result reflects my personal identity, experience, and creative direction.

If you’d like to adapt parts of this project for your own use, please:

- Credit this repository where appropriate
- Avoid reproducing the site wholesale or with only superficial changes
- Use it as a learning reference rather than a template

If you’re unsure whether your use case is appropriate, feel free to reach out.

© David Providence. All rights reserved.
