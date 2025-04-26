import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import {useState, useEffect} from 'react';

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

export const UpcomingEvents = () => {
  return (
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
  );
};
