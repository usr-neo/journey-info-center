
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Video, MapPin, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedCountries from '@/components/FeaturedCountries';

const Index = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 hero-pattern">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Navigate Global Visa Requirements with Confidence
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Your comprehensive guide to visa information for over 20 countries. 
              Get the latest requirements, documentation, and application processes.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for a country..."
                className="pl-10 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="absolute right-1.5 top-1.5">
                Search
              </Button>
            </form>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/countries">Explore Countries</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/documentation">View Required Documents</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedCountries />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Your Complete Visa Guide Resource</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Country Guides</h3>
              <p className="text-muted-foreground mb-4">Detailed visa information for over 20 popular destinations worldwide.</p>
              <Button asChild variant="link" className="mt-auto">
                <Link to="/countries" className="flex items-center gap-2">
                  <span>Browse Countries</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">Essential documents and requirements for successful visa applications.</p>
              <Button asChild variant="link" className="mt-auto">
                <Link to="/documentation" className="flex items-center gap-2">
                  <span>View Documents</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Guides</h3>
              <p className="text-muted-foreground mb-4">Helpful video tutorials on visa applications and travel procedures.</p>
              <Button asChild variant="link" className="mt-auto">
                <Link to="/videos" className="flex items-center gap-2">
                  <span>Watch Videos</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">FAQ</h3>
              <p className="text-muted-foreground mb-4">Answers to common questions about visa applications and travel.</p>
              <Button asChild variant="link" className="mt-auto">
                <Link to="/faq" className="flex items-center gap-2">
                  <span>Read FAQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Explore our comprehensive visa guides to ensure a smooth application process for your next international adventure.
            </p>
            <Button asChild size="lg">
              <Link to="/countries">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
