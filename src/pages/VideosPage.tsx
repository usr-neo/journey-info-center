
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoResourceSection from '@/components/VideoResourceSection';
import { Button } from '@/components/ui/button';

const VideosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-muted py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Video Resources</h1>
          <p className="text-muted-foreground mb-6">
            Watch helpful tutorials and guides for visa applications and international travel
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
      
      <VideoResourceSection />
      
      <div className="container py-12">
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions About Visa Applications?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you still have questions after watching our videos, check our comprehensive FAQ section for answers to common visa and travel inquiries.
          </p>
          <Button asChild>
            <Link to="/faq">Visit FAQ Section</Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default VideosPage;
