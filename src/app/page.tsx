"use client";

import { useState } from 'react';
import { YoutubeGallery } from "@/components/youtube-gallery";
import { getYouTubeVideos } from "@/services/youtube";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Verified } from "lucide-react";

const bandInfo = {
  name: "Electric Pulse",
  description: "A high-energy band bringing you the best of funk, rock, and soul.",
  members: [
    { id: "1", name: "Alex R.", avatarUrl: "https://picsum.photos/id/237/100/100" },
    { id: "2", name: "Jordan M.", avatarUrl: "https://picsum.photos/id/238/100/100" },
    { id: "3", name: "Casey L.", avatarUrl: "https://picsum.photos/id/239/100/100" },
  ],
  socialLinks: {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export default async function Home() {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const youtubeVideoId = 'jfKfPfyJRdk';

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === 'correctPassword') {
      setAccessGranted(true);
    } else {
      alert('Incorrect password');
      setAccessGranted(false);
    }
  };

    const videos = await getYouTubeVideos("channelId");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Band Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{bandInfo.name}</CardTitle>
          <CardDescription>{bandInfo.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Band Members</h3>
          <div className="flex items-center gap-4">
            {bandInfo.members.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <Avatar>
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-sm mt-1">{member.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4">
              <Button asChild variant="link" >
                <a href={bandInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </Button>
              <Button asChild variant="link">
                <a href={bandInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
              <Button asChild variant="link">
                <a href={bandInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Gallery */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Video Gallery</h2>
        <YoutubeGallery videos={videos} />
      </section>

      {/* Livestream Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Live Stream</h2>
        {!accessGranted ? (
          <>
            <p>
              Join us for our next live performance! Enter the password to access the stream.
            </p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Password"
                className="border rounded px-2 py-1 text-black"
                value={password}
                onChange={handleInputChange}
              />
              <Button type="submit">Access Stream</Button>
            </form>
          </>
        ) : (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </section>
    </div>
  );
}

