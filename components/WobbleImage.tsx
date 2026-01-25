"use client";
import React from 'react';

interface WobbleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function WobbleImage({ src, alt, className, ...rest }: WobbleImageProps) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
        {...rest}
      />
    </div>
  );
}

