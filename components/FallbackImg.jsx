import Image from "next/image";
import React, { useState } from "react";

export default function FallbackImg({ src, fallbackSrc, alt, ...props }) {
  const [ImgSrc, setSrc] = useState(src);

  const handleError = () => {
    setSrc(fallbackSrc);
  };
  return <Image src={ImgSrc} alt={alt} onError={handleError} {...props} />;
}
