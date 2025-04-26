'use client';

import {useState, useEffect} from 'react';
import {YoutubeGallery} from '@/components/youtube-gallery';
import {UpcomingEvents} from '@/components/upcoming-events';
import {BandInfo} from '@/components/band-info';
import {ContactUs} from '@/components/contact-us';
import {LiveStream} from '@/components/live-stream';

interface HomeProps {
  videos: {
    id: string;
    title: string;
    thumbnailUrl: string;
  }[];
}

export default function Home({videos}: HomeProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Band Information */}
      <BandInfo />

      {/* Video Gallery */}
      <section id="video-gallery" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Music Videos</h2>
        <YoutubeGallery videos={videos} />
      </section>

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Livestream Section */}
      <LiveStream />
    </div>
  );
}
