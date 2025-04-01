
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize dark mode from localStorage or system preference
const initializeDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Execute theme initialization immediately
initializeDarkMode();

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(<App />);
