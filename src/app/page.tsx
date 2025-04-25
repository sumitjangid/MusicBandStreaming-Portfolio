'use client';

import {useState} from 'react';
import {YoutubeGallery} from '@/components/youtube-gallery';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

const bandInfo = {
  name: 'Electric Pulse',
  description: 'A high-energy band bringing you the best of funk, rock, and soul.',
  members: [
    {
      id: '1',
      name: 'Alex R.',
      avatarUrl: 'https://picsum.photos/id/237/100/100',
      bio: 'Lead vocalist and guitarist, Alex brings a raw energy to the stage that captivates audiences.',
    },
    {
      id: '2',
      name: 'Jordan M.',
      avatarUrl: 'https://picsum.photos/id/238/100/100',
      bio: 'Bass player Jordan lays down the groove with infectious rhythms and a deep pocket.',
    },
    {
      id: '3',
      name: 'Casey L.',
      avatarUrl: 'https://picsum.photos/id/239/100/100',
      bio: 'Drummer Casey keeps the beat alive with powerful drumming and intricate patterns.',
    },
  ],
  socialLinks: {
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
  contact: {
    email: 'info@electricpulse.com',
    phone: '555-123-4567',
  },
};

interface HomeProps {
  videos: {
    id: string;
    title: string;
    thumbnailUrl: string;
  }[];
}

export default function Home({videos}: HomeProps) {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [streamType, setStreamType] = useState<'youtube' | 'zoom'>('youtube'); // Default to YouTube
  const youtubeVideoId = 'jfKfPfyJRdk';
  const zoomMeetingId = '7109942516'; // Replace with your Zoom Meeting ID
  const zoomPassword = 'zoomPassword'; // Replace with your Zoom Meeting Password (if any)

  const handleInputChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === 'correctPassword') {
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
            {bandInfo.members.map(member => (
              <div
                key={member.id}
                className="w-32 h-48 relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                  <span className="text-sm font-semibold">{member.name}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm px-4 text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4">
              <Button asChild variant="link">
                <a
                  href={bandInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </Button>
              <Button asChild variant="link">
                <a
                  href={bandInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
              <Button asChild variant="link">
                <a
                  href={bandInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: {bandInfo.contact.email}</p>
            <p>Phone: {bandInfo.contact.phone}</p>
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
    </div>
  );
}
