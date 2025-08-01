'use client';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LogosSection from './LogosSection';

const FeaturedSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  // Logo data with placeholder images
  const logos = [
    { id: 1, src: '/images/bloomberg.png', alt: 'Company 1' },
    { id: 2, src: '/images/forbes.png', alt: 'Company 2' },
    { id: 3, src: '/images/techcrunch.png', alt: 'Company 3' },
    { id: 4, src: '/images/techrader.png', alt: 'Company 4' },
    { id: 5, src: '/images/usa-today.png', alt: 'Company 5' }
  ];

  // Duplicate logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ['0%', '-100%'],
        transition: {
          x: {
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className='bg-clr-14 relative z-20 flex w-full flex-col items-center justify-start gap-16 overflow-hidden rounded-tl-[32px] rounded-tr-[32px] border-b pt-14 pb-10'
      style={{
        marginTop: '-48px',
        borderImage:
          'linear-gradient(90deg, rgba(158, 168, 171, 1) 0%, rgba(129, 112, 168, 1) 48.527792096138%, rgba(79, 173, 162, 1) 100%) 1'
      }}
    >
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-8 px-8'>
        <div className='relative flex w-full flex-col items-center justify-start gap-8 md:flex-row md:gap-[120px]'>
          <div className='w-full'>
            <LogosSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
