'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CountryCoverageHome = () => {
  const regions = ['All region', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

  const countries = [
    { name: 'Albania', flag: '/flags/albania.svg', region: 'Europe' },
    { name: 'Argentina', flag: '/flags/argentina.svg', region: 'Americas' },
    { name: 'Australia', flag: '/flags/australia.svg', region: 'Oceania' },
    { name: 'Austria', flag: '/flags/austria.svg', region: 'Europe' },
    { name: 'Bahrain', flag: '/flags/bahrain.svg', region: 'Asia' },
    { name: 'Belgium', flag: '/flags/belgium.svg', region: 'Europe' },
    { name: 'Brazil', flag: '/flags/brazil.svg', region: 'Americas' },
    { name: 'Czech Republic', flag: '/flags/czech-republic.svg', region: 'Europe' },
    { name: 'Canada', flag: '/flags/canada.svg', region: 'Americas' },
    { name: 'China', flag: '/flags/china.svg', region: 'Asia' },
    { name: 'Denmark', flag: '/flags/denmark.svg', region: 'Europe' },
    { name: 'Ecuador', flag: '/flags/ecuador.svg', region: 'Americas' },
    { name: 'Egypt', flag: '/flags/egypt.svg', region: 'Africa' },
    { name: 'Finland', flag: '/flags/finland.svg', region: 'Europe' },
    { name: 'France', flag: '/flags/france.svg', region: 'Europe' },
    { name: 'Germany', flag: '/flags/germany.svg', region: 'Europe' },
    { name: 'Ghana', flag: '/flags/ghana.svg', region: 'Africa' },
    { name: 'Greece', flag: '/flags/greece.svg', region: 'Europe' },
    { name: 'Hong Kong', flag: '/flags/hong-kong.svg', region: 'Asia' },
    { name: 'Hungary', flag: '/flags/hungary.svg', region: 'Europe' },
    { name: 'India', flag: '/flags/india.svg', region: 'Asia' },
    { name: 'Indonesia', flag: '/flags/indonesia.svg', region: 'Asia' },
    { name: 'Italy', flag: '/flags/italy.svg', region: 'Europe' },
    { name: 'Japan', flag: '/flags/japan.svg', region: 'Asia' },
    { name: 'Jordan', flag: '/flags/jordan.svg', region: 'Asia' },
    { name: 'Kenya', flag: '/flags/kenya.svg', region: 'Africa' },
    { name: 'Lebanon', flag: '/flags/lebanon.svg', region: 'Asia' },
    { name: 'Malaysia', flag: '/flags/malaysia.svg', region: 'Asia' },
    { name: 'Mexico', flag: '/flags/mexico.svg', region: 'Americas' },
    { name: 'Netherlands', flag: '/flags/netherlands.svg', region: 'Europe' },
    { name: 'New Zealand', flag: '/flags/new-zealand.svg', region: 'Oceania' },
    { name: 'Nigeria', flag: '/flags/nigeria.svg', region: 'Africa' },
    { name: 'Norway', flag: '/flags/norway.svg', region: 'Europe' },
    { name: 'Portugal', flag: '/flags/portugal.svg', region: 'Europe' },
    { name: 'Saudi Arabia', flag: '/flags/saudi-arabia.svg', region: 'Asia' },
    { name: 'South Korea', flag: '/flags/south-korea.svg', region: 'Asia' },
    { name: 'Singapore', flag: '/flags/singapore.svg', region: 'Asia' },
    { name: 'Spain', flag: '/flags/spain.svg', region: 'Europe' },
    { name: 'Thailand', flag: '/flags/thailand.svg', region: 'Asia' },
    { name: 'Ukraine', flag: '/flags/ukraine.svg', region: 'Europe' },
    { name: 'United States', flag: '/flags/united-states.svg', region: 'Americas' },
    { name: 'Zimbabwe', flag: '/flags/zimbabwe.svg', region: 'Africa' }
  ];

  const [selectedRegion, setSelectedRegion] = useState('All region');

  const filteredCountries =
    selectedRegion === 'All region' ? countries : countries.filter((c) => c.region === selectedRegion);

  const regionImage = `/home/${selectedRegion.toLowerCase().replace(' ', '-')}.svg`; // e.g., /maps/asia.png

  return (
    <section className='w-full bg-gradient-to-b from-[#0c1118] to-[#1d1e2d] px-4 py-12 md:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl'>
        {/* Headings */}
        <div className='mb-8 md:mb-12 lg:mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-2 flex items-center'
          >
            <p className='text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
              Country coverage
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-[32px] leading-[1.1] font-medium tracking-[-1px] text-transparent md:text-[48px] md:leading-[1.1] md:tracking-[-1.5px] lg:text-[58px] lg:leading-[1.1] lg:tracking-[-2px]'
          >
            Send money to 150+ <br className='hidden sm:block' /> countries with SmashPay
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='mb-8 md:mb-12'
        >
          <div className='flex flex-wrap gap-2 md:gap-3'>
            {regions.map((region, index) => (
              <motion.button
                key={region}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex cursor-pointer items-center justify-center rounded-[44px] border border-[#3c414c] px-5 py-2.5 ${
                  selectedRegion === region ? 'bg-gradient-4 text-white' : 'gradient-text-2'
                }`}
                onClick={() => setSelectedRegion(region)}
              >
                <span className='text-md leading-tight font-semibold tracking-[-0.25px]'>{region}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 2 Column Layout */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-5'>
          {/* Left: Country Flags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='col-span-2'
          >
            <div className='h-[500px] overflow-y-auto pr-2'>
              <div className='grid grid-cols-2 gap-4'>
                {filteredCountries.map((country, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className='flex flex-col items-center rounded-lg p-3 transition-all'
                  >
                    <div className='mr-3 h-10 w-10 overflow-hidden rounded-full'>
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={40}
                        height={40}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <p className='font-medium text-gray-300'>{country.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className='relative mt-5 flex cursor-pointer items-start justify-start'>
              <Link href={'/country-coverage'}>
                <div className='flex items-center justify-center gap-2.5'>
                  <p className='text-lg leading-tight font-semibold tracking-[-0.25px] text-white'>
                    See full list of coverage
                  </p>
                  <div className='relative h-[22px] w-[22px]'>
                    <FiArrowRight className='h-[22px] w-[22px] text-white transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right: Region Map Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='col-span-3 flex items-center justify-center'
          >
            <Image
              src={regionImage}
              alt={`${selectedRegion} Map`}
              width={500}
              height={300}
              className='h-auto w-full max-w-2xl object-contain'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountryCoverageHome;
