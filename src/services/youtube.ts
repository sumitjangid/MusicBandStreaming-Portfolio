/**
 * Represents a YouTube video.
 */
export interface YouTubeVideo {
  /**
   * The ID of the YouTube video.
   */
  id: string;
  /**
   * The title of the YouTube video.
   */
  title: string;
  /**
   * The URL of the YouTube video thumbnail.
   */
  thumbnailUrl: string;
}

/**
 * Asynchronously retrieves a list of YouTube videos for a given channel.
 *
 * @param channelId The ID of the YouTube channel.
 * @returns A promise that resolves to an array of YouTubeVideo objects.
 */
export async function getYouTubeVideos(channelId: string): Promise<YouTubeVideo[]> {
  // TODO: Implement this by calling the YouTube API.

  return [
    {
      id: '5qap5aO4i9A',
      title: 'Lo-fi hip hop radio - beats to relax/study to',
      thumbnailUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/mqdefault.jpg'
    },
    {
      id: 'jfKfPfyJRdk',
      title: 'Relaxing Music &amp; Soft Rain Sounds | Sleep, Study, Meditate',
      thumbnailUrl: 'https://i.ytimg.com/vi/jfKfPfyJRdk/mqdefault.jpg'
    },
    {
      id: 'DWcJFNfaw9c',
      title: 'White Noise Black Screen | Sleep, Study, Focus | 10 Hours',
      thumbnailUrl: 'https://i.ytimg.com/vi/DWcJFNfaw9c/mqdefault.jpg'
    },
    {
      id: 'Vt90efG8fqQ',
      title: 'Calm Piano Music 24/7: sleep, study, focus, relax',
      thumbnailUrl: 'https://i.ytimg.com/vi/Vt90efG8fqQ/mqdefault.jpg'
    }
  ];
}

