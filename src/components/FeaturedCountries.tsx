
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { countries } from '@/data/countries';
import CountryCard from '@/components/CountryCard';

const FeaturedCountries = () => {
  const featuredCountries = countries.filter(country => country.featured).slice(0, 5);

  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
            <p className="text-muted-foreground">Explore visa requirements for the most visited countries</p>
          </div>
          <Link 
            to="/countries" 
            className="flex items-center gap-2 text-primary hover:underline mt-4 md:mt-0"
          >
            <span>View all countries</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-6">
          {featuredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCountries;
