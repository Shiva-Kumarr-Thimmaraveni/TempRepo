# Internal Chatbot

This Directory Contains only required components
Requires Pre-Installation Steps for Running under Local Environment. 

## Installation

Use the Node Package Manager [npm](https://nodejs.org/en) for installing required dependencies.

Checking if npm installed or not.

```bash
node --version
npm --version
```

## Vite + React Setup

Use the Below Commands for Creating [Vite Development Setup](https://vitejs.dev/guide/) Using React JS as UI Library.

```bash
npm create vite@latest [project_name]
```

## Lucid-React Dependency Setup 

Use the Below Commands for Creating [Lucid-React](https://lucide.dev/guide/packages/lucide-react).

```bash
npm install lucide-react
```

## Tailwind CSS Setup

Use the Below Commands for Creating [Tailwind CSS](https://tailwindcss.com/docs/guides/vite) for Additional Styling for Recat JS Applications.

Check if the below steps are Done.

```bash
npm create vite@latest my-project -- --template react
cd my-project
```
Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths
Change the tailwind.config.js file as shown below. 

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS (index.css)

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process using this Command.

```bash
npm run dev
```





