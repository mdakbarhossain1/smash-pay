'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const EuropeCountries = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countryColumns = [
    {
      zone: 'LATAM',
      countries: [
        {
          country: 'Mexico',
          flag: '/country-coverage/mexico-flag.png'
        },
        {
          country: 'Brazil',
          flag: '/country-coverage/brazil-flag.png'
        },
        {
          country: 'Colombia',
          flag: '/country-coverage/colombia-flag.png'
        },
        {
          country: 'Ecuador',
          flag: '/country-coverage/EC.png'
        },
        {
          country: 'Peru',
          flag: '/country-coverage/PE.png'
        },
        {
          country: 'Costa Rica',
          flag: '/country-coverage/costa-rica.png'
        },
        // {
        //   country: 'Panama',
        //   flag: '/country-coverage/PA.png'
        // },
        {
          country: 'Guatemala',
          flag: '/country-coverage/GT.png'
        },
        {
          country: 'Argentina',
          flag: '/country-coverage/argentina.png'
        },
        {
          country: 'Chile',
          flag: '/country-coverage/chile.png'
        },
        {
          country: 'Switzerland',
          flag: '/country-coverage/switzerland-flag.png'
        }
      ]
    },
    {
      zone: 'APAC',
      countries: [
        {
          country: 'Indonesia',
          flag: '/country-coverage/indonesia-flag.png'
        },
        {
          country: 'Malaysia',
          flag: '/country-coverage/malaysia.png'
        },
        {
          country: 'Thailand',
          flag: '/country-coverage/TH.png'
        },
        {
          country: 'Philippines',
          flag: '/country-coverage/PH.png'
        },
        {
          country: 'Japan',
          flag: '/country-coverage/Japan-flag.png'
        },
        {
          country: 'China',
          flag: '/country-coverage/china-flag.png'
        },
        {
          country: 'South Korea',
          flag: '/country-coverage/South-Korea-flag.png'
        },
        {
          country: 'Vietnam',
          flag: '/country-coverage/VN.png'
        },
        {
          country: 'Australia',
          flag: '/country-coverage/Australia-flag.png'
        },
        {
          country: 'Australia',
          flag: '/country-coverage/Hong-Kong-flag.png'
        },
        {
          country: 'Ukraine',
          flag: '/country-coverage/Ukraine-flag.png'
        }
      ]
    },
    {
      zone: 'Africa',
      countries: [
        {
          country: 'Kenya',
          flag: '/country-coverage/KE.png'
        },
        {
          country: 'Nigeria',
          flag: '/country-coverage/Nigeria-flag.png'
        },
        {
          country: 'Tanzania',
          flag: '/country-coverage/TZ.png'
        }
      ]
    },
    {
      zone: 'Europe / UK',
      countries: [
        {
          country: 'United Kingdom',
          flag: '/country-coverage/United-Kingdom-flag.png'
        }
        // {
        //   country: 'EUropian union',
        //   flag: '/country-coverage/United-Kingdom-flag.png'
        // },
      ]
    },
    {
      zone: 'India',
      countries: [
        {
          country: 'India',
          flag: '/country-coverage/india-flag.png'
        }
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
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
              {column.countries.map((country, idx) => (
                <motion.div
                  key={idx}
                  className='flex items-center justify-center'
                  onMouseEnter={() => setHoveredCountry(country.country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  variants={itemVariants}
                  whileHover='hover'
                >
                  <div
                    className={`md:text-md text-md flex w-full items-center gap-4 rounded-xl border border-[#3C414C] bg-[#1D1F2E] px-5 py-4 text-white capitalize`}
                  >
                    <Image
                      src={country.flag}
                      height={6}
                      width={6}
                      alt='Flag'
                      className='h-6 w-6 rounded-full'
                    />
                    {country.country}
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
