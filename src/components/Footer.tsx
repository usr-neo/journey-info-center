
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-12 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VisaGuide</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your comprehensive guide to visa requirements around the world. Accurate, up-to-date information for travelers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/countries" className="text-sm text-muted-foreground hover:text-primary">Countries</Link>
              </li>
              <li>
                <Link to="/documentation" className="text-sm text-muted-foreground hover:text-primary">Documentation</Link>
              </li>
              <li>
                <Link to="/videos" className="text-sm text-muted-foreground hover:text-primary">Videos</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/country/united-states" className="text-sm text-muted-foreground hover:text-primary">United States</Link>
              </li>
              <li>
                <Link to="/country/canada" className="text-sm text-muted-foreground hover:text-primary">Canada</Link>
              </li>
              <li>
                <Link to="/country/united-kingdom" className="text-sm text-muted-foreground hover:text-primary">United Kingdom</Link>
              </li>
              <li>
                <Link to="/country/australia" className="text-sm text-muted-foreground hover:text-primary">Australia</Link>
              </li>
              <li>
                <Link to="/country/schengen" className="text-sm text-muted-foreground hover:text-primary">Schengen Countries</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@visaguide.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                <span>info@visaguide.com</span>
              </a>
              <p className="text-xs text-muted-foreground">
                The information on this website is for general information purposes only. 
                We make no representations or warranties of any kind, express or implied.
              </p>
              <p className="text-xs text-muted-foreground mt-6">
                © {new Date().getFullYear()} VisaGuide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
