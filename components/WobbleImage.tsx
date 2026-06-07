"use client";
import React from 'react';
import Image from 'next/image';

interface WobbleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function WobbleImage({ src, alt, className, ...rest }: WobbleImageProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transform transition-transform duration-500 hover:scale-105"
        loading={rest.loading ?? 'lazy'}
        {...rest}
      />
    </div>
  );
}

