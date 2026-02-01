# Aklile Ansa - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Fully containerized with Docker for easy deployment.

## 🚀 Features

- **Modern Design** - Clean, professional dark theme with cyan accents
- **Responsive** - Fully responsive design that works on all devices
- **Smooth Animations** - Subtle animations and transitions
- **Optimized Performance** - Built with Next.js App Router for optimal performance
- **Type Safe** - Written in TypeScript for better developer experience
- **Containerized** - Docker support for development and production

## 📦 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Container:** Docker & Docker Compose

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Docker Development

1. **Start with Docker Compose (development):**
   ```bash
   docker-compose --profile dev up --build
   ```

2. **Access the app:**
   Visit [http://localhost:3000](http://localhost:3000)

### Docker Production

1. **Build and run production container:**
   ```bash
   docker-compose --profile prod up --build
   ```

2. **Or build manually:**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## �� Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and animations
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx   # Navigation bar
│       │   └── Footer.tsx   # Footer component
│       ├── sections/
│       │   ├── Hero.tsx     # Hero section with typing effect
│       │   ├── About.tsx    # About me section
│       │   ├── Skills.tsx   # Skills section with progress bars
│       │   ├── Projects.tsx # Projects showcase
│       │   ├── Experience.tsx # Work experience timeline
│       │   └── Contact.tsx  # Contact form
│       └── index.ts         # Component exports
├── public/                  # Static assets
├── Dockerfile              # Production Dockerfile
├── Dockerfile.dev          # Development Dockerfile
├── docker-compose.yml      # Docker Compose configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/Hero.tsx` - Name and titles
- `src/components/sections/About.tsx` - Bio and stats
- `src/components/sections/Skills.tsx` - Your skills
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Experience.tsx` - Work history
- `src/components/sections/Contact.tsx` - Contact details

### Colors
The primary accent color is cyan. To change it, search for `cyan` in the components and replace with your preferred Tailwind color.

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🐳 Docker Commands

```bash
# Development
docker-compose --profile dev up --build

# Production
docker-compose --profile prod up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

Feel free to reach out if you have any questions or suggestions!
# Portfolio
