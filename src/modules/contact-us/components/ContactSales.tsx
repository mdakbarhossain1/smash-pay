'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type CountryCardProps = {
  country: string;
  flag: string;
  phone: string;
};

const CountryCard = ({ country, flag, phone }: CountryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='border-stroke-2 relative flex flex-1 flex-col items-start justify-start gap-0.5 rounded-[10px] border bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] p-4'
    >
      <div className='relative flex shrink-0 flex-row items-center justify-start gap-2 self-stretch'>
        <Image src={flag} alt={`${country} flag`} width={24} height={24} className='h-6 w-6 shrink-0' />
        <div className='relative flex-1 text-left text-lg leading-tight font-medium tracking-tight text-white'>
          {country}
        </div>
      </div>
      <Link
        href={`tel:${phone.replace(/\s+/g, '')}`}
        className='self-stretch text-left text-lg tracking-tight text-gray-300 underline'
      >
        {phone}
      </Link>
    </motion.div>
  );
};

const ContactSales = () => {
  const countries = [
    [
      { country: 'Indonesia (HQ)', flag: '/contact-us/flags/id.png', phone: '+62 123 456 7890' },
      { country: 'United States', flag: '/contact-us/flags/us.png', phone: '+1 123 456 7890' },
      { country: 'United Kingdom', flag: '/contact-us/flags/uk.png', phone: '+44 123 456 7890' },
      { country: 'Germany', flag: '/contact-us/flags/de.png', phone: '+49 123 456 7890' }
    ],
    [
      { country: 'France', flag: '/contact-us/flags/fr.png', phone: '+33 123 456 7890' },
      { country: 'Portugal', flag: '/contact-us/flags/pt.png', phone: '+351 123 456 7890' },
      { country: 'Spain', flag: '/contact-us/flags/es.png', phone: '+34 123 456 7890' },
      { country: 'Sweden', flag: '/contact-us/flags/se.png', phone: '+46 123 456 7890' }
    ],
    [
      { country: 'Denmark', flag: '/contact-us/flags /dk.png', phone: '+45 123 456 7890' },
      { country: 'Belgium', flag: '/contact-us/flags/be.png', phone: '+32 123 456 7890' },
      { country: 'Austria', flag: '/contact-us/flags/at.png', phone: '+43 123 456 7890' },
      { country: 'China', flag: '/contact-us/flags/cn.png', phone: '+86 123 456 7890' }
    ],
    [
      { country: 'Netherlands', flag: '/contact-us/flags/nl.png', phone: '+31 123 456 7890' },
      { country: 'Japan', flag: '/contact-us/flags/jp.png', phone: '+81 123 456 7890' },
      { country: 'Singapore', flag: '/contact-us/flags/sg.png', phone: '+65 123 456 7890' },
      { country: 'Australia', flag: '/contact-us/flags/au.png', phone: '+61 123 456 7890' }
    ],
    [
      { country: 'Brazil', flag: '/contact-us/flags/br.png', phone: '+55 123 456 7890' },
      { country: 'Canada', flag: '/contact-us/flags/ca.png', phone: '+1 123 456 7890' },
      { country: 'United Arab Emirates', flag: '/contact-us/flags/ae.png', phone: '+971 123 456 7890' },
      { country: 'South Korea', flag: '/contact-us/flags/kr.png', phone: '+82 123 456 7890' }
    ]
  ];

  return (
    <div className='bg-bg bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden px-4 pt-32 pb-32 md:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative flex w-full max-w-7xl shrink-0 flex-col items-center justify-start gap-3'
      >
        <div className='relative flex shrink-0 flex-col items-center justify-start gap-10 self-stretch'>
          <div className='relative flex w-full max-w-[800px] shrink-0 flex-col items-center justify-start gap-6'>
            <h2 className='gradient-text relative self-stretch text-center text-4xl leading-tight font-medium tracking-tight text-transparent md:text-5xl'>
              Contact sales by phone
            </h2>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='relative flex w-full max-w-7xl shrink-0 flex-col items-start justify-start gap-8'
      >
        {countries.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='relative flex w-full shrink-0 flex-col items-center justify-center gap-4 md:flex-row md:gap-8'
          >
            {row.map((country, index) => (
              <CountryCard key={index} country={country.country} flag={country.flag} phone={country.phone} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactSales;
