const Footer = () => {
  return (
    <footer className="bg-background border-t shadow-sm py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BandStream. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          <a href="/terms" className="hover:underline">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
