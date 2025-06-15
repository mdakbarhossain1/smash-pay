'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState, type JSX } from 'react';
import {
  FiDivideCircle,
  FiFilm,
  FiGlobe,
  FiGrid,
  FiShoppingBag,
  FiShoppingCart,
  FiTruck
} from 'react-icons/fi';

type BusinessType = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  imageMobile: string;
  imageDesktop: string;
  alt: string;
};

const WhoWeAreFor = () => {
  const [activeBusiness, setActiveBusiness] = useState(6);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const businesses: BusinessType[] = [
    {
      id: 1,
      title: 'E-Commerce and Retail',
      description:
        'Ensure timely vendor or supplier payments and scale globally by issuing payouts in different currencies and countries',
      icon: <FiShoppingCart className='text-white' size={24} />,
      imageMobile: '/payouts/gamming-who-we-are.jpg',
      imageDesktop: '/payouts/gamming-who-we-are.jpg',
      alt: 'ecommerce'
    },
    {
      id: 2,
      title: 'Gaming',
      description: 'Enhance the gamer experience by sending instant payouts for rewards and winnings',
      icon: <FiDivideCircle className='text-white' size={24} />,
      imageMobile: '/payouts/whowearephone.jpg',
      imageDesktop: '/payouts/whowearephone.jpg',
      alt: 'gaming'
    },
    {
      id: 3,
      title: 'Passenger Transport',
      description:
        'Improve operational efficiency and driver satisfaction by sending instant payouts to drivers',
      icon: <FiTruck className='text-white' size={24} />,
      imageMobile: '/payouts/gamming-who-we-are.jpg',
      imageDesktop: '/payouts/gamming-who-we-are.jpg',
      alt: 'passenger transport'
    },
    {
      id: 4,
      title: 'Media and Entertainment',
      description: 'Provide timely compensation for creators and partners in new countries and regions',
      icon: <FiFilm className='text-white' size={24} />,
      imageMobile: '/payouts/whowearephone.jpg',
      imageDesktop: '/payouts/whowearephone.jpg',
      alt: 'media entertainment'
    },
    {
      id: 5,
      title: 'Marketplaces',
      description:
        'Simplify payments to sellers and partners, ensuring quick, efficient, and multi-currency payouts across regions',
      icon: <FiShoppingBag className='text-white' size={24} />,
      imageMobile: '/payouts/gamming-who-we-are.jpg',
      imageDesktop: '/payouts/gamming-who-we-are.jpg',
      alt: 'marketplaces'
    },
    {
      id: 6,
      title: 'Travel',
      description: 'Improve efficiency with instant cross-border payouts to service providers and partners',
      icon: <FiGlobe className='text-white' size={24} />,
      imageMobile: '/payouts/whowearephone.jpg',
      imageDesktop: '/payouts/whowearephone.jpg',
      alt: 'travel'
    },
    {
      id: 7,
      title: 'SaaS',
      description: 'Simplify global operations with scheduled payouts and managing cross-border payments',
      icon: <FiGrid className='text-white' size={24} />,
      imageMobile: '/payouts/whowearephone.jpg',
      imageDesktop: '/payouts/whowearephone.jpg',
      alt: 'saas'
    }
  ];

  // Auto-rotate active tab
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveBusiness((prev) => (prev % businesses.length) + 1);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className='bg-clr-14 w-full text-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={container}
          className='flex flex-col items-center gap-8 lg:flex-row'
        >
          {/* Left Column */}
          <div className='w-full lg:w-1/2'>
            <motion.div variants={item} className='mb-10'>
              <h2 className='mb-4 text-3xl font-bold md:text-4xl'>Who we're for?</h2>
              <p className='text-lg text-gray-400'>
                Unlimit's real-time payout solution meets the needs of local and global businesses, enhancing
                customer experience at every level.
              </p>
            </motion.div>

            <motion.ul variants={container} className='space-y-4'>
              {businesses.map((business) => (
                <motion.li
                  key={business.id}
                  variants={item}
                  onClick={() => setActiveBusiness(business.id)}
                  className={`cursor-pointer rounded-lg p-2 transition-all duration-300`}
                >
                  <div className='flex items-start gap-4'>
                    <div className='mt-1 flex-shrink-0'>{business.icon}</div>
                    <div>
                      <h3 className='text-lg font-semibold'>{business.title}</h3>
                      {activeBusiness === business.id && (
                        <p className='mt-1 text-gray-400'>{business.description}</p>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column (Image) */}
          <div className='mt-8 w-full lg:mt-0 lg:w-1/2'>
            <motion.div
              variants={item}
              className='relative h-[300px] w-full overflow-hidden rounded-xl shadow-lg sm:h-[400px] lg:h-[500px]'
            >
              <Image
                src={businesses.find((b) => b.id === activeBusiness)?.imageDesktop || ''}
                alt={businesses.find((b) => b.id === activeBusiness)?.alt || 'business image'}
                fill
                className='object-cover transition-opacity duration-500 ease-in-out'
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreFor;
