'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const EuropeCountries = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countryColumns = [
    {
      zone: 'Western Europe',
      countries: [
        'Albania',
        'Bosnia & Herzegovina',
        'Czechia',
        'France',
        'Hungary',
        'Latvia',
        'Malta',
        'Netherlands',
        'Portugal',
        'Slovakia',
        'Switzerland'
      ]
    },
    {
      zone: 'America',
      countries: [
        'Andorra',
        'Bulgaria',
        'Denmark',
        'Georgia',
        'Iceland',
        'Liechtenstein',
        'Moldova',
        'North Macedonia',
        'Romania',
        'Slovenia',
        'Ukraine'
      ]
    },
    {
      zone: 'Asia',
      countries: [
        'Austria',
        'Croatia',
        'Estonia',
        'Germany',
        'Ireland',
        'Lithuania',
        'Monaco',
        'Norway',
        'San Marino',
        'Spain',
        'United Kingdom'
      ]
    },
    {
      zone: 'Africa',
      countries: [
        'Belgium',
        'Cyprus',
        'Finland',
        'Greece',
        'Italy',
        'Luxembourg',
        'Montenegro',
        'Poland',
        'Serbia',
        'Sweden',
        'Vatican City'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: 'beforeChildren'
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.03,
      backgroundColor: '#3b82f6',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className='bg-clr-14 w-full py-16'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <section className='bg-clr-14 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {countryColumns.map((column, index) => (
          <motion.div key={index} className='country-wrap' variants={itemVariants}>
            <h5 className='mt-8 mb-4 text-xl text-white'>{column.zone}</h5>
            <div className='grid grid-cols-4 gap-4'>
              {column.countries.map((country, idx) => (
                <motion.div
                  key={idx}
                  className='flex items-center justify-center'
                  onMouseEnter={() => setHoveredCountry(country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  variants={itemVariants}
                  whileHover='hover'
                >
                  <div
                    className={`text-md flex w-full items-center gap-4 rounded-xl border border-[#3C414C] bg-[#1D1F2E] px-5 py-4 text-white capitalize`}
                  >
                    <Image src='/ALL.png' height={6} width={6} alt='Flag' className='h-6 w-6 rounded-full' />
                    {country}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default EuropeCountries;
