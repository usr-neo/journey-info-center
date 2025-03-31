
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const videoCategories = [
  {
    id: "application-process",
    title: "Application Process",
    videos: [
      {
        id: "1",
        title: "How to Fill Out a Visa Application Form",
        embedId: "QUbWJiXYXaQ",
        description: "A step-by-step guide to completing visa application forms accurately."
      },
      {
        id: "2",
        title: "Visa Interview Tips",
        embedId: "0m9-r9oBGvA",
        description: "Prepare for your visa interview with these essential tips."
      },
      {
        id: "3",
        title: "Common Visa Application Mistakes",
        embedId: "h_m-BjrxmgI",
        description: "Avoid these common mistakes that can lead to visa rejection."
      },
    ]
  },
  {
    id: "country-specific",
    title: "Country Specific",
    videos: [
      {
        id: "4",
        title: "US Tourist Visa Guide",
        embedId: "pKbrxOL_35U",
        description: "Complete guide to applying for a US tourist visa."
      },
      {
        id: "5",
        title: "Schengen Visa Application Process",
        embedId: "ZuKvlC_WrNY",
        description: "Learn how to apply for a Schengen visa for European travel."
      },
      {
        id: "6",
        title: "Canada Study Permit Application",
        embedId: "TJ0FrXFsbsw",
        description: "Guide for international students applying to study in Canada."
      },
    ]
  },
  {
    id: "travel-tips",
    title: "Travel Tips",
    videos: [
      {
        id: "7",
        title: "Airport Immigration Tips",
        embedId: "AqYi45vZ8b4",
        description: "How to smoothly navigate immigration at international airports."
      },
      {
        id: "8",
        title: "Travel Documents Organization",
        embedId: "V-QgXcszuSA",
        description: "Keep your travel documents organized with these practical tips."
      },
      {
        id: "9",
        title: "Digital Nomad Visa Options",
        embedId: "b-EsmXqQ7Ho",
        description: "Explore visa options for remote workers and digital nomads."
      },
    ]
  }
];

interface VideoCardProps {
  title: string;
  embedId: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, embedId, description }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <CardHeader className="px-4 py-3 pb-0">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-3 flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const VideoResourceSection = () => {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Video Resources</h2>
      <p className="text-muted-foreground mb-8">
        Watch these helpful videos to guide you through the visa application process and international travel.
      </p>

      <Tabs defaultValue="application-process" className="w-full">
        <TabsList className="mb-8">
          {videoCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>{category.title}</TabsTrigger>
          ))}
        </TabsList>
        
        {videoCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  title={video.title} 
                  embedId={video.embedId} 
                  description={video.description} 
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default VideoResourceSection;
