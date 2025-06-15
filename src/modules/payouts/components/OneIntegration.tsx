'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import OneIntegrationSlider from './OneIntegrationSlider';

const OneIntegration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const featureItems = [
    {
      icon: (
        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='1' y='1' width='38' height='38' rx='15' stroke='#B3B3B3' strokeWidth='2'></rect>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.463 31.6008C21.5176 31.7199 21.6052 31.8208 21.7155 31.8916C21.8258 31.9624 21.9541 32 22.0851 32C22.2161 32 22.3444 31.9624 22.4547 31.8916C22.565 31.8208 22.6526 31.7199 22.7072 31.6008L29.9262 11.6097C30.2714 10.6538 29.3462 9.72865 28.3903 10.0738L8.39922 17.2928C8.2801 17.3474 8.17916 17.435 8.10839 17.5453C8.03762 17.6556 8 17.7839 8 17.9149C8 18.0459 8.03762 18.1742 8.10839 18.2845C8.17916 18.3948 8.2801 18.4824 8.39922 18.537L16.7507 22.7127C16.9829 22.8288 17.1712 23.0171 17.2873 23.2493L21.463 31.6008ZM21.7935 26.36L26.4021 13.5979L13.64 18.2065L17.9311 20.352C18.674 20.7235 19.2765 21.326 19.648 22.0689L21.7935 26.36Z'
            fill='#B3B3B3'
          ></path>
        </svg>
      ),
      title: '200+',
      description: 'global locations'
    },
    {
      icon: (
        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='1' y='1' width='38' height='38' rx='15' stroke='#B3B3B3' strokeWidth='2'></rect>
          <path
            d='M14 23.6667H16.4C16.4 24.9867 18.044 26.1111 20 26.1111C21.956 26.1111 23.6 24.9867 23.6 23.6667C23.6 22.3222 22.352 21.8333 19.712 21.1856C17.168 20.5378 14 19.7311 14 16.3333C14 14.1456 15.764 12.2878 18.2 11.6644V9H21.8V11.6644C24.236 12.2878 26 14.1456 26 16.3333H23.6C23.6 15.0133 21.956 13.8889 20 13.8889C18.044 13.8889 16.4 15.0133 16.4 16.3333C16.4 17.6778 17.648 18.1667 20.288 18.8144C22.832 19.4622 26 20.2689 26 23.6667C26 25.8544 24.236 27.7122 21.8 28.3356V31H18.2V28.3356C15.764 27.7122 14 25.8544 14 23.6667Z'
            fill='#B3B3B3'
          ></path>
        </svg>
      ),
      title: '50+',
      description: 'currencies'
    }
  ];

  return (
    <section ref={sectionRef} className='relative overflow-hidden py-16 md:py-24' aria-hidden='false'>
      {/* Fixed dotted background */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #B3B3B3 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }}
      />

      <div className='relative z-10 container mx-auto px-4'>
        <motion.div
          className='mx-auto max-w-4xl text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 className='mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:text-5xl'>
            One integration for <span className='text-primary'>multiple</span> payout options
          </motion.h2>

          <motion.ul
            className='flex flex-col justify-center gap-8 md:flex-row md:gap-16'
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {featureItems.map((item, index) => (
              <motion.li
                key={index}
                className='flex flex-col items-center'
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <div className='mb-4'>{item.icon}</div>
                <div className='text-center'>
                  <h3 className='mb-2 text-2xl font-bold md:text-3xl'>{item.title}</h3>
                  <p className='text-gray-500'>{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <OneIntegrationSlider />
    </section>
  );
};

export default OneIntegration;
