
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VisaGuide</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/countries" className="text-sm font-medium hover:text-primary">Countries</Link>
          <Link to="/documentation" className="text-sm font-medium hover:text-primary">Documentation</Link>
          <Link to="/videos" className="text-sm font-medium hover:text-primary">Videos</Link>
          <Link to="/faq" className="text-sm font-medium hover:text-primary">FAQ</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search countries..."
              className="pl-8 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-fade-in">
          <form onSubmit={handleSearch} className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search countries..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/countries" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Countries</Link>
            <Link to="/documentation" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Documentation</Link>
            <Link to="/videos" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Videos</Link>
            <Link to="/faq" className="text-sm font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
