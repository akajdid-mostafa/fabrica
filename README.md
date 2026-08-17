<div align="center">

# Fabrica

### Manufacturing Services Website — TailwindCSS 4 Template

A modern, responsive, and fully customizable website template designed for manufacturing companies, factories, industrial businesses, and engineering services.

[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

---

## Features

- Built with **TailwindCSS 4** and **Vite 7**
- Fully responsive — mobile, tablet, and desktop
- 11 pre-built pages (Home, About, Services, Products, Blog, Contact, etc.)
- Dark/light sections with modern UI patterns
- Smooth scroll, animations (AOS), and interactive galleries
- Iconify icons library included
- Clean and modular code structure with Handlebars partials
- Easy to customize and extend

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero, services, products, testimonials, CTA |
| `about.html` | Company story, team, stats, values |
| `services.html` | Service listings and details |
| `products.html` | Product catalog with filtering |
| `case-studies.html` | Portfolio / case studies |
| `blog.html` | Blog listing page |
| `blog-detail.html` | Single blog post |
| `contact.html` | Contact form and info |
| `faqs.html` | Frequently asked questions |
| `privacy-policy.html` | Privacy policy page |
| `error-404.html` | 404 error page |

## Getting Started

### Prerequisites

- **Node.js** >= 16 — [Download](https://nodejs.org/)
- **Yarn** — [Docs](https://classic.yarnpkg.com/en/)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fabrica.git
cd fabrica

# Install dependencies
yarn install

# Start development server
yarn dev
```

The dev server runs at `http://localhost:5173`.

### Build

```bash
# Build for production
yarn build

# Preview the production build
yarn preview
```

The production output is generated in the `dist/` folder.

## Project Structure

```
Fabrica/
├── src/
│   ├── assets/
│   │   ├── css/          # Stylesheets
│   │   ├── js/           # JavaScript files
│   │   └── images/       # Images, icons, media
│   ├── partials/         # Handlebars partials (header, footer, meta)
│   ├── index.html        # Homepage
│   ├── about.html
│   ├── services.html
│   ├── products.html
│   ├── blog.html
│   ├── blog-detail.html
│   ├── case-studies.html
│   ├── contact.html
│   ├── faqs.html
│   ├── privacy-policy.html
│   └── error-404.html
├── Docs/                 # Documentation
├── dist/                 # Production build output
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors & Theme

Edit the TailwindCSS theme configuration in the CSS files under `src/assets/css/` to change colors, fonts, and spacing.

### Content

All page content is directly in the HTML files. Edit the text, images, and sections as needed. Handlebars partials (`src/partials/`) are reused across pages for header, footer, and meta tags.

### Images

Replace images in `src/assets/images/` with your own. Keep the same filenames or update the references in the HTML files.

## Browser Support

- Chrome (Windows, macOS, Linux)
- Firefox (Windows, macOS, Linux)
- Safari (macOS)
- Microsoft Edge
- Other modern WebKit-based browsers

## Support

If you have any questions or issues, feel free to reach out:

- **Website:** [akajdidm.vercel.app](https://akajdidm.vercel.app/)
- **Email:** [mostafaakajdid6@gmail.com](mailto:mostafaakajdid6@gmail.com)

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Built with care by [Mostafa Akajdid](https://akajdidm.vercel.app/)

</div>
