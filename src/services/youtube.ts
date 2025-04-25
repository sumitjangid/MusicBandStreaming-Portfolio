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
      id: 'Rd9VMEzYWoI',
      title: 'Foo Fighters - The Pretender',
      thumbnailUrl: 'https://i.ytimg.com/vi/Rd9VMEzYWoI/mqdefault.jpg'
    },
    {
      id: 'pAgnJDJN4VA',
      title: 'Red Hot Chili Peppers - Can\'t Stop',
      thumbnailUrl: 'https://i.ytimg.com/vi/pAgnJDJN4VA/mqdefault.jpg'
    },
    {
      id: 'qZUTkK2QZms',
      title: 'Audioslave - Like a Stone',
      thumbnailUrl: 'https://i.ytimg.com/vi/qZUTkK2QZms/mqdefault.jpg'
    },
    {
      id: 'Ys7-6_t7OEQ',
      title: 'Nirvana - Smells Like Teen Spirit',
      thumbnailUrl: 'https://i.ytimg.com/vi/Ys7-6_t7OEQ/mqdefault.jpg'
    }
  ];
}
