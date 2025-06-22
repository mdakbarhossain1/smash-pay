'use client';
import { useEffect, useRef } from 'react';

const GlobeAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const rotationAngle = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const lastX = useRef<number>(0);
  const dragSpeed = 0.005; // Sensitivity of drag
  const autoRotateSpeed = 0.005;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8, 600);
    canvas.width = size;
    canvas.height = size;

    // Load globe image
    const globeImg = new Image();
    globeImg.src = '/crypto/globe-download.svg';

    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw rotated globe
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotationAngle.current);

      const globeSize = canvas.width;
      ctx.drawImage(globeImg, -globeSize / 2, -globeSize / 2, globeSize, globeSize);
      ctx.restore();

      // Update rotation
      if (!isDragging.current) {
        rotationAngle.current += autoRotateSpeed;
        if (rotationAngle.current > Math.PI * 2) {
          rotationAngle.current = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    globeImg.onload = () => animate();

    // 🎯 Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastX.current = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastX.current;
      rotationAngle.current += deltaX * dragSpeed;
      lastX.current = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // 🎯 Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      lastX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.touches[0].clientX - lastX.current;
      rotationAngle.current += deltaX * dragSpeed;
      lastX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    // Add listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);

      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          borderRadius: '50%',
          // boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)',
          maxWidth: '100%',
          cursor: 'grab',
          touchAction: 'none'
        }}
      />
    </div>
  );
};

export default GlobeAnimation;
