import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const contactInfo = {
  email: 'info@electricpulse.com',
  phone: '555-123-4567',
};

export const ContactUs = () => {
  return (
    <section id="contact-us" className="mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
        </CardContent>
      </Card>
    </section>
  );
};
