
import React, { useState } from 'react';
import { passportRankings } from '@/data/passportRankings';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PassportPowerCard from '@/components/PassportPowerCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Medal, Search, SlidersHorizontal } from 'lucide-react';

const PassportRankingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'rank' | 'powerScore' | 'totalAccess' | 'xp'>('rank');

  const filteredPassports = passportRankings.filter(passport =>
    passport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPassports = [...filteredPassports].sort((a, b) => {
    switch (sortOrder) {
      case 'powerScore':
        return b.powerScore - a.powerScore;
      case 'totalAccess':
        return b.totalAccess - a.totalAccess;
      case 'xp':
        return b.experiencePoints - a.experiencePoints;
      case 'rank':
      default:
        return a.rank - b.rank;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Medal className="h-6 w-6 text-amber-500" />
              Global Passport Ranking
            </h1>
            <p className="text-muted-foreground">
              Compare passport power and visa-free access across countries
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search passports..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <Select
              value={sortOrder}
              onValueChange={(value) => setSortOrder(value as 'rank' | 'powerScore' | 'totalAccess' | 'xp')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rank">Rank (Default)</SelectItem>
                <SelectItem value="powerScore">Power Score</SelectItem>
                <SelectItem value="totalAccess">Total Access</SelectItem>
                <SelectItem value="xp">Experience Points</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedPassports.map((passport) => (
            <PassportPowerCard key={passport.countryId} passport={passport} />
          ))}
        </div>

        <Separator className="my-12" />

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How Passport Power is Calculated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Passport power is calculated based on the number of destinations their holders can access without a prior visa. The score is based on:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Number of countries with visa-free access</li>
                <li>Number of countries with visa-on-arrival access</li>
                <li>Number of countries with e-visa access</li>
                <li>Political influence and relationships</li>
                <li>Historical treaty agreements</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Experience Points (XP)</h3>
              <p className="text-muted-foreground">
                The XP system is a gamified representation of a passport's overall strength. Points are earned based on:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>+10 XP for each visa-free country</li>
                <li>+5 XP for each visa-on-arrival country</li>
                <li>+3 XP for each e-visa country</li>
                <li>+100 XP for being in the top 5 global ranking</li>
                <li>+50 XP for exclusive diplomatic advantages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default PassportRankingPage;
