"use client";

import { useState } from 'react';
import { YouTubeVideo } from "@/services/youtube";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayIcon } from "lucide-react";

interface YoutubeGalleryProps {
  videos: YouTubeVideo[];
}

export const YoutubeGallery = ({ videos }: YoutubeGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  if (!videos || videos.length === 0) {
    return <p>No videos available.</p>;
  }

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setSelectedVideoId(null);
    }
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full rounded shadow-md aspect-video object-cover cursor-pointer"
              onClick={() => handleVideoClick(video.id)}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity bg-black bg-opacity-50 cursor-pointer" onClick={() => handleVideoClick(video.id)}>
              <PlayIcon className="h-12 w-12 text-white" />
            </div>
            <h3 className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 text-sm">
              {video.title}
            </h3>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
          {selectedVideoId && (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};


