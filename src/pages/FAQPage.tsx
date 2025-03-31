
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-muted py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-6">
            Find answers to common questions about visa applications and international travel
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/countries">Browse Countries</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <FAQSection />
      
      <div className="container py-12">
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Now that you have answers to common questions, explore our country-specific visa guides to prepare for your next international journey.
          </p>
          <Button asChild>
            <Link to="/countries">Explore Country Guides</Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default FAQPage;
