'use client';

import * as React from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { cn } from '@/lib/utils';

const GALLERY_IMAGES = [
  '/images/gallery/3ec26cd0.jpg',
  '/images/gallery/9d6f8818.jpg',
  '/images/gallery/73f4b739.jpg',
  '/images/gallery/a9b387ac.jpg',
  '/images/gallery/55fa4a14.jpg',
  '/images/gallery/681870be.jpg',
  '/images/gallery/b54bb08c.jpg',
  '/images/gallery/00df9106.jpg',
];

interface PhotosBlockProps {
  className?: string;
}

export function PhotosBlock({ className }: PhotosBlockProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={src}
              className="aspect-square relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => handleOpenLightbox(index)}
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 z-10" />
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                priority={index < 4}
              />
            </div>
          ))}
        </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={GALLERY_IMAGES.map(src => ({ src }))}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        }}
      />
      </div>
    </section>
  );
} 