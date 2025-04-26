'use client';

import {useState, useEffect} from 'react';
import {YoutubeGallery} from '@/components/youtube-gallery';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {PlayIcon} from 'lucide-react';

const bandInfo = {
  name: 'Electric Pulse',
  description: 'A high-energy band bringing you the best of funk, rock, and soul.',
  members: [
    {
      id: '1',
      name: 'Alex R.',
      avatarUrl: 'https://images.pexels.com/photos/1673350/pexels-photo-1673350.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lead vocalist and guitarist, Alex brings a raw energy to the stage that captivates audiences.',
    },
    {
      id: '2',
      name: 'Jordan M.',
      avatarUrl: 'https://images.pexels.com/photos/96424/pexels-photo-96424.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Bass player Jordan lays down the groove with infectious rhythms and a deep pocket.',
    },
    {
      id: '3',
      name: 'Casey L.',
      avatarUrl: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Drummer Casey keeps the beat alive with powerful drumming and intricate patterns.',
    },
    {
      id: '4',
      name: 'Morgan S.',
      avatarUrl: 'https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Keyboardist Morgan adds lush textures and soaring melodies to the band sound.',
    },
    {
      id: '5',
      name: 'Taylor B.',
      avatarUrl: 'https://images.pexels.com/photos/2679544/pexels-photo-2679544.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Saxophonist Taylor brings soulful vibes and improvisational flair to every performance.',
    },
    {
      id: '6',
      name: 'Jamie D.',
      avatarUrl: 'https://images.pexels.com/photos/1036935/pexels-photo-1036935.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Trumpet player Jamie adds a brassy punch to the band\'s vibrant sound.',
    },
    {
      id: '7',
      name: 'Chris P.',
      avatarUrl: 'https://images.pexels.com/photos/3768031/pexels-photo-3768031.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Trombone extraordinaire Chris blends smooth tones with rhythmic precision.',
    },
    {
      id: '8',
      name: 'Blake H.',
      avatarUrl: 'https://images.pexels.com/photos/1194727/pexels-photo-1194727.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Energetic dancer Blake electrifies the stage with captivating moves.',
    },
    {
      id: '9',
      name: 'Riley T.',
      avatarUrl: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Guitarist Riley shreds with electrifying solos and infectious riffs.',
    },
    {
      id: '10',
      name: 'Sam K.',
      avatarUrl: 'https://images.pexels.com/photos/936099/pexels-photo-936099.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'DJ Sam spins the latest beats and remixes to keep the party going.',
    },
  ],
  socialLinks: {
    youtube: 'https://youtube.com/FooFighters',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
  contact: {
    email: 'info@electricpulse.com',
    phone: '555-123-4567',
  },
};

const upcomingEvents = [
  {
    id: 'event1',
    date: '2024-08-14T00:00:00.000Z',
    location: 'The Roxy, Los Angeles',
    thumbnailUrl: 'https://i.ytimg.com/vi/pAgnJDJN4VA/mqdefault.jpg',
    description: 'Get ready for a night of electrifying music at The Roxy!',
  },
  {
    id: 'event2',
    date: '2024-09-20T00:00:00.000Z',
    location: 'The Fillmore, San Francisco',
    thumbnailUrl: 'https://i.ytimg.com/vi/45JVP4V9Eak/mqdefault.jpg',
    description: 'Join us at The Fillmore for an unforgettable performance.',
  },
];

interface HomeProps {
  videos: {
    id: string;
    title: string;
    thumbnailUrl: string;
  }[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

const ClientFormattedDate = ({dateString}: {dateString: string}) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(formatDate(dateString));
  }, [dateString]);

  return <>{formattedDate}</>;
}

export default function Home({videos}: HomeProps) {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [streamType, setStreamType] = useState<'youtube' | 'zoom'>('youtube'); // Default to YouTube
  const youtubeVideoId = process.env.YOUTUBE_VIDEO_ID || 'dQw4w9WgXcQ';
  const zoomMeetingId = process.env.ZOOM_MEETING_ID || '1234567890'; // Replace with your Zoom Meeting ID
  const zoomPassword = process.env.ZOOM_PASSWORD || 'zoomPassword'; // Replace with your Zoom Meeting Password (if any)

  const handleInputChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === process.env.LIVESTREAM_PASSWORD) {
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
      <section id="band-info" className="mb-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{bandInfo.name}</CardTitle>
            <CardDescription>{bandInfo.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Band Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {bandInfo.members.map(member => (
                <div
                  key={member.id}
                  className="relative w-full h-64 overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 group"
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
      </section>

      {/* Video Gallery */}
      <section id="video-gallery" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Music Videos</h2>
        <YoutubeGallery videos={videos} />
      </section>

      {/* Upcoming Events */}
      <section id="events" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingEvents.map(event => (
            <Card key={event.id}>
              <img
                src={event.thumbnailUrl}
                alt={event.location}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  <ClientFormattedDate dateString={event.date} />
                </CardTitle>
                <CardDescription>{event.location}</CardDescription>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Livestream Section */}
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
    </div>
  );
}

