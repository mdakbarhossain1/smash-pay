'use client';

import { motion, useMotionValue } from 'framer-motion';
import React, { createContext, useContext, useRef } from 'react';

const CardContext = createContext<{ rotateX: any; rotateY: any } | null>(null);

// Outer container that tracks mouse and sets perspective
export function CardContainer({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateMax = 5;
    const rotateYVal = (x / width - 0.5) * rotateMax * 2;
    const rotateXVal = (0.5 - y / height) * rotateMax * 2;

    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <CardContext.Provider value={{ rotateX, rotateY }}>
      <motion.div
        ref={ref}
        className={`relative perspective-[1000px] ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </CardContext.Provider>
  );
}

// Inner card body that rotates
export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error('CardBody must be used inside CardContainer');

  const { rotateX, rotateY } = ctx;

  return (
    <motion.div
      style={{
        rotateX,
        rotateY
      }}
      className={`transform-style-preserve-3d transition-all duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}
// child item that can float with card 
// Child item that can float with `translateZ`
export function CardItem({
  children,
  translateZ = 0,
  className = '',
  as: Component = 'div',
  ...props
}: {
  children: React.ReactNode;
  translateZ?: number | string;
  className?: string;
  as?: any;
  [key: string]: any;
}) {
  return (
    <motion.div
      style={{
        transform: `translateZ(${translateZ}px)`
      }}
      className={`transform-style-preserve-3d ${className}`}
      {...props}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
