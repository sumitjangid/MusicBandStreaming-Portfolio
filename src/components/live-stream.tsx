'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';

export const LiveStream = () => {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [streamType, setStreamType] = useState<'youtube' | 'zoom'>('youtube'); // Default to YouTube
  const youtubeVideoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || '5qap5aO4i9A';
  const zoomMeetingId = process.env.NEXT_PUBLIC_ZOOM_MEETING_ID || '1234567890'; // Replace with your Zoom Meeting ID
  const zoomPassword = process.env.NEXT_PUBLIC_ZOOM_PASSWORD || 'zoomPassword'; // Replace with your Zoom Meeting Password (if any)

  const handleInputChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const liveStreamPassword = process.env.NEXT_PUBLIC_LIVESTREAM_PASSWORD;
    if (password === liveStreamPassword) {
      setAccessGranted(true);
    } else {
      alert('Incorrect password');
      setAccessGranted(false);
    }
  };

  const handleStreamTypeChange = (type: 'youtube' | 'zoom') => {
    setStreamType(type);
  };

  return (
    <section id="live-stream">
      <h2 className="text-2xl font-bold mb-4">Live Stream</h2>
      {!accessGranted ? (
        <>
          <p>
            Join us for our next live performance! Enter the password to
            access the stream.
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
        <>
          <div className="mb-4">
            <Button
              variant={streamType === 'youtube' ? 'default' : 'secondary'}
              onClick={() => handleStreamTypeChange('youtube')}
            >
              YouTube Stream
            </Button>
            <Button
              variant={streamType === 'zoom' ? 'default' : 'secondary'}
              onClick={() => handleStreamTypeChange('zoom')}
              className="ml-2"
            >
              Zoom Meeting
            </Button>
          </div>

          {streamType === 'youtube' ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="YouTube Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://zoom.us/wc/${zoomMeetingId}/join?prefer=1&un=${btoa(
                  'BandStream User'
                )}`}
                title="Zoom Meeting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* <p>
                Join our Zoom meeting! Meeting ID: {zoomMeetingId}, Password:{' '}
                {zoomPassword}
              </p> */}
            </div>
          )}
        </>
      )}
    </section>
  );
};
