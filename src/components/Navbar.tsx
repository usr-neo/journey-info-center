
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookText, Globe, MessageCircleQuestion, Video, Award, FileText } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary';
  };

  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="font-bold">VisaGuide</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/countries" className={`text-sm ${isActive('/countries')}`}>
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Countries</span>
              </span>
            </Link>
            <Link to="/documentation" className={`text-sm ${isActive('/documentation')}`}>
              <span className="flex items-center gap-1">
                <BookText className="h-4 w-4" />
                <span>Documentation</span>
              </span>
            </Link>
            <Link to="/videos" className={`text-sm ${isActive('/videos')}`}>
              <span className="flex items-center gap-1">
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </span>
            </Link>
            <Link to="/faq" className={`text-sm ${isActive('/faq')}`}>
              <span className="flex items-center gap-1">
                <MessageCircleQuestion className="h-4 w-4" />
                <span>FAQ</span>
              </span>
            </Link>
            <Link to="/passport-ranking" className={`text-sm ${isActive('/passport-ranking')}`}>
              <span className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>Passport Ranking</span>
              </span>
            </Link>
            <Link to="/indian-passport" className={`text-sm ${isActive('/indian-passport')}`}>
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Indian Passport</span>
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const isDark = document.documentElement.classList.contains('dark');
              if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
              } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              }
            }}
            className="p-2 rounded-md bg-muted"
          >
            {document.documentElement.classList.contains('dark') ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
