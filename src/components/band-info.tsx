import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const bandInfo = {
  name: 'Electric Pulse',
  description: 'A high-energy band bringing you the best of funk, rock, and soul.',
  members: [
    {
      id: '1',
      name: 'Alex R.',
      avatarUrl: 'https://images.pexels.com/photos/2679544/pexels-photo-2679544.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      avatarUrl: 'https://images.pexels.com/photos/96424/pexels-photo-96424.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      name: 'Riley T.',
      avatarUrl: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Guitarist Riley shreds with electrifying solos and infectious riffs.',
    },
  ],
  socialLinks: {
    youtube: 'https://youtube.com/FooFighters',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
};

export const BandInfo = () => {
  return (
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
        </CardContent>
      </Card>
    </section>
  );
};
