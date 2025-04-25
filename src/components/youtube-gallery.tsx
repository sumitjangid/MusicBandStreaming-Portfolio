"use client";

import { YouTubeVideo } from "@/services/youtube";

interface YoutubeGalleryProps {
  videos: YouTubeVideo[];
}

export const YoutubeGallery = ({ videos }: YoutubeGalleryProps) => {
  if (!videos || videos.length === 0) {
    return <p>No videos available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="relative">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full rounded shadow-md aspect-video object-cover"
          />
          <h3 className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 text-sm">
            {video.title}
          </h3>
        </div>
      ))}
    </div>
  );
};
