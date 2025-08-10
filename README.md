# Rushikesh Tayade - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing backend engineering and integrations expertise.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Comprehensive SEO metadata and structured data
- **Content Management**: Easy content updates via JSON files
- **Animations**: Smooth animations and transitions using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

```
rushikesh-portfolio/
├── app/                    # Next.js app router
│   ├── api/resume/        # Resume PDF download endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── hero.tsx           # Hero section
│   ├── highlights.tsx     # Key achievements
│   ├── experience.tsx     # Work experience
│   ├── projects.tsx       # Featured projects
│   ├── skills.tsx         # Technical skills
│   ├── contact.tsx        # Contact information
│   └── ...
├── content/               # JSON content files
│   ├── site.json          # Personal information
│   ├── highlights.json    # Key achievements
│   ├── experience.json    # Work experience
│   ├── projects.json      # Featured projects
│   └── skills.json        # Technical skills
└── public/                # Static assets
    └── Rushikesh_Resume.pdf
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rushikesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All content is managed through JSON files in the `content/` directory:

- **`site.json`**: Personal information, contact details
- **`highlights.json`**: Key achievements and metrics
- **`experience.json`**: Work experience and roles
- **`projects.json`**: Featured projects and descriptions
- **`skills.json`**: Technical skills grouped by category

Simply edit these files to update the website content without touching code.

## 🎨 Customization

### Colors
The design uses a professional color scheme with Indigo accents. Modify the Tailwind classes in components to change colors.

### Typography
Uses Geist Sans for headings and body text. Font loading is optimized in `layout.tsx`.

### Animations
Framer Motion provides smooth animations. Adjust timing and effects in individual components.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 360px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large: 1280px and up

## 🔧 Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended)
   ```bash
   vercel --prod
   ```

## 📊 Performance

- Lighthouse Score: 95+ (Performance, SEO, Accessibility, Best Practices)
- Core Web Vitals: Optimized for LCP, FID, and CLS
- Image optimization with Next.js Image component
- Efficient code splitting and lazy loading

## 🌟 Features Highlight

### Resume Download
- Serves actual PDF resume from `/api/resume`
- Optimized for fast downloads

### Theme Toggle
- System preference detection
- Persistent theme selection
- Smooth transitions

### Contact Integration
- Click-to-copy phone number
- Direct email and social media links
- Toast notifications for user feedback

### Smooth Navigation
- Anchor-based navigation with smooth scrolling
- Active section highlighting
- Mobile-friendly navigation

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by [Rushikesh Tayade](https://github.com/ruuushhh)
