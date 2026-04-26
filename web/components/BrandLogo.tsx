"use client";

import { useState } from "react";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  alt?: string;
};

export function BrandLogo({
  className,
  imageClassName,
  fallbackClassName,
  alt = "Kutumbsy logo",
}: BrandLogoProps) {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <div className={className}>
      {!imageMissing ? (
        <img
          src="/logo_1kutumb.png"
          alt={alt}
          className={imageClassName}
          onError={() => setImageMissing(true)}
        />
      ) : null}
      {imageMissing ? <div className={fallbackClassName}>Kutumbsy</div> : null}
    </div>
  );
}
