'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

type HeroContent = {
  image: string;
  items: {
    title: string;
    description: string;
  }[];
};

const heroContent: HeroContent = {
  image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop',
  items: [
    {
      title: 'First Content',
      description: 'Scroll down to see the next content item. The image stays the same.'
    },
    {
      title: 'Second Content',
      description: 'Keep scrolling! The image remains static while only text changes.'
    },
    {
      title: 'Third Content',
      description: 'Halfway through the content items. Image stays fixed.'
    },
    {
      title: 'Final Content',
      description: 'Last item before moving to next section. Same background image.'
    }
  ]
};

export default function CryptoHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate the total height needed for all content items
      const itemHeight = window.innerHeight;
      const totalHeight = heroContent.items.length * itemHeight;

      // Set up the scrollable content container
      gsap.set(contentContainerRef.current, {
        height: totalHeight
      });

      // Create scroll triggers for each content item
      heroContent.items.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: contentContainerRef.current,
          start: () => `top+=${index * itemHeight} top`,
          end: () => `top+=${(index + 1) * itemHeight} top`,
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
          markers: true // Remove this in production
        });
      });

      // Pin the hero section
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${totalHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: 1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Static Image with Changing Content</title>
      </Head>

      <div className='relative'>
        {/* Hero Section */}
        <div ref={triggerRef} className='relative h-screen w-full overflow-hidden'>
          {/* Static Background Image */}
          <div className='fixed inset-0 -z-10'>
            <img src={heroContent.image} alt='Background' className='h-full w-full object-cover' />
            <div className='absolute inset-0 bg-black/30'></div>
          </div>

          {/* Scrollable Content Container */}
          <div ref={contentContainerRef} className='relative z-10'>
            {/* This creates the scrollable space */}
          </div>

          {/* Content Overlay - Fixed Position */}
          <div className='pointer-events-none fixed inset-0 flex items-center justify-center px-8 md:px-16 lg:px-32'>
            <div className='flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row'>
              {/* Text Content */}
              <div className='flex-1 text-white'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className='pointer-events-auto'
                  >
                    <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
                      {heroContent.items[activeIndex].title}
                    </h1>
                    <p className='mb-8 max-w-lg text-lg md:text-xl'>
                      {heroContent.items[activeIndex].description}
                    </p>
                    <button className='rounded-lg bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-200'>
                      Learn More
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Optional Static Image */}
              <div className='hidden flex-1 md:block'>
                <div className='h-64 w-full overflow-hidden rounded-2xl border-4 border-white shadow-xl md:h-[32rem]'>
                  <img src={heroContent.image} alt='Content' className='h-full w-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Section */}
        <div className='relative z-20 flex h-screen items-center justify-center bg-gray-100'>
          <div className='max-w-4xl px-8 text-center'>
            <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-6xl'>Next Section</h2>
            <p className='mb-8 text-lg text-gray-600 md:text-xl'>
              You've scrolled through all hero content items.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
