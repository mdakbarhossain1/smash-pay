'use client';

import useIsMobile from '@/hook/isMobile';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function OfficesSection() {
  const isMobile = useIsMobile();

  const offices = useMemo(() => {
    const data = [
      {
        name: 'Yogyakarta',
        address: 'Jend. Sudirman Street, Jetis, Yogyakarta 55233',
        image: '/about-us/yogyakartaJend.png',
        styles: 'left-[120px] top-14 h-[323px]'
      },
      {
        name: 'Berlin',
        address: 'Level 8, Rosa-Luxemburg-Straße 71, Berlin 80094',
        image: '/about-us/berlin.png',
        styles: 'left-[120px] top-[419px] h-[260px]'
      },
      {
        name: 'San Francisco',
        address: '123 Street, 7th Floor,\nSan Francisco, CA 94105',
        image: '/about-us/san-francisco.png',
        styles: 'top-0 right-0 h-[322px]'
      },
      {
        name: 'London',
        address: 'The Warehouse 123-456\nOld St, London, EC1V 9NR UK',
        image: '/about-us/london.png',
        styles: 'top-[340px] right-0 h-[348px]'
      }
    ];

    return isMobile ? data.slice(0, 2) : data;
  }, [isMobile]);

  return (
    <section className='flex w-full flex-col items-center overflow-hidden bg-[#0f0f0f] pt-32 pb-32'>
      <div className='flex w-full max-w-7xl flex-col gap-16 px-4 md:px-8 lg:flex-row'>
        {/* Images Section */}
        <div className='relative h-[720px] w-full flex-shrink-0 lg:w-[640px]'>
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              className={`absolute w-60 overflow-hidden rounded-3xl ${office.styles}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                background: `
      linear-gradient(to left, rgba(0,44,21,0.3), rgba(0,44,21,0.3)),
      linear-gradient(167.94deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%),
      linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%),
      url(${office.image})
    `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className='absolute top-5 left-5 text-xl font-medium text-white'
                style={{ letterSpacing: '-0.5px' }}
              >
                {office.name}
              </div>
              <div
                className='absolute left-5 w-[200px] text-sm text-white'
                style={{
                  bottom: '20px',
                  letterSpacing: '-0.25px',
                  lineHeight: '1.5'
                }}
              >
                {office.address}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Section */}
        <div className='flex flex-1 flex-col justify-center gap-10'>
          <div className='flex flex-col gap-6'>
            <div className='w-max border-t-4 border-white pt-2 text-lg font-medium text-white'>Careers</div>
            <h2 className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-5xl'>
              Explore roles at SmashPay’s offices around the world
            </h2>
            <p className='text-lg text-gray-300'>
              We're making journey all over the world, as a remote company with employees in multiple
              countries around the globe. Our team is big on collaboration and flexibility.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className='flex w-max items-center gap-2 rounded-full border border-gray-700 bg-gradient-to-b from-gray-900 to-black px-8 py-4 text-white'
          >
            View open roles
            <HiArrowNarrowRight className='h-[22px] w-[22px]' />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
