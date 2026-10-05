"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = "/images/fallback.jpg",
  onError,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={(e) => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
        if (onError) onError(e);
      }}
    />
  );
}
