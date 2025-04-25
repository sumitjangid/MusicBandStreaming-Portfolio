'use client';
import {useState} from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {Menu} from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            BandStream
          </a>
        </div>
        <nav className="hidden md:flex items-center justify-end flex-grow space-x-6">
          <a href="#band-info" className="text-sm hover:underline">
            Band Info
          </a>
          <a href="#video-gallery" className="text-sm hover:underline">
            Video Gallery
          </a>
          <a href="#live-stream" className="text-sm hover:underline">
            Live Stream
          </a>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-2 md:hidden">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>BandStream Menu</SheetTitle>
              <SheetDescription>
                Explore more about Electric Pulse.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Button variant="outline" asChild>
                <a href="#band-info">Band Info</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#video-gallery">Video Gallery</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#live-stream">Live Stream</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Nav;
