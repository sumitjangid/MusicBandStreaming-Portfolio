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
      id: 'dQw4w9WgXcQ',
      title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'The Benny Hill Show - Yakety Sax',
      thumbnailUrl: 'https://i.ytimg.com/vi/jNQXAC9IVRw/mqdefault.jpg'
    },
    {
      id: 'nfWlot6h_JM',
      title: 'Nyan Cat [original]',
      thumbnailUrl: 'https://i.ytimg.com/vi/nfWlot6h_JM/mqdefault.jpg'
    },
    {
      id: 'QH2-TGUlwzg',
      title: 'Megalovania',
      thumbnailUrl: 'https://i.ytimg.com/vi/QH2-TGUlwzg/mqdefault.jpg'
    }
  ];
}

