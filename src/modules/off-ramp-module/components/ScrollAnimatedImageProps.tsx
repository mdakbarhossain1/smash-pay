'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ScrollAnimatedImageProps {
  scrollId: string;
  src: string;
  alt: string;
  height?: string;
  aspectRatio?: string;
}

const ScrollAnimatedImage: React.FC<ScrollAnimatedImageProps> = ({
  scrollId,
  src,
  alt,
  height = '700px',
  aspectRatio = '16/9'
}) => {
  const ref = useRef(null);

  // Track scrollY progress relative to the component
  const { scrollY } = useScroll();

  // Animation starts at 100px scroll, ends at 600px scroll
  const opacity = useTransform(scrollY, [100, 600], [1, 1]);
  const rotateX = useTransform(scrollY, [100, 600], [15, 0]);
  const rotateY = useTransform(scrollY, [100, 600], [-15, 0]);
  const scale = useTransform(scrollY, [100, 600], [0.95, 1]);

  return (
    <motion.div
      id={scrollId}
      ref={ref}
      style={{
        opacity,
        rotateX,
        rotateY,
        scale,
        height
      }}
      className={`relative mx-auto my-10 aspect-[${aspectRatio}] w-full max-w-7xl overflow-hidden rounded-xl will-change-transform`}
    >
      <Image src={src} alt={alt} fill className='rounded-xl object-cover' priority />
    </motion.div>
  );
};

export default ScrollAnimatedImage;
