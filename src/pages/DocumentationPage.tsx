
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocumentationSection from '@/components/DocumentationSection';
import { Button } from '@/components/ui/button';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-muted py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Visa Documentation</h1>
          <p className="text-muted-foreground mb-6">
            Learn about the essential documents required for visa applications around the world
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
      
      <DocumentationSection />
      
      <div className="container py-12">
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Visa Documentation?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check our country-specific pages for detailed requirements or watch our video guides for step-by-step instructions on preparing your visa documents correctly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/countries">Country-Specific Requirements</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/videos">Watch Video Guides</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DocumentationPage;
