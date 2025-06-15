'use client';
import { fadeIn, staggerContainer } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CryptoBrowse = () => {
  const navigate = useRouter();
  const topics = [
    {
      icon: 'contact-us/icons/profile-account.svg',
      title: 'Accept Fiat Globally',
      slug: 'accounts',
      description: 'E-wallets, QR code, Cash & Instant bank transfers'
    },
    {
      icon: 'contact-us/icons/pay-card.svg',
      title: 'No Chargebacks',
      slug: 'payments',
      description: 'We handle all fraud and AML processes.'
    },
    {
      icon: 'contact-us/icons/guides.svg',
      title: 'Modular KYC',
      slug: 'added-services',
      description: 'Pass user information securely for frictionless onboarding'
    },
    {
      icon: 'contact-us/icons/conversion.svg',
      title: 'Acquiring',
      slug: 'acquiring',
      description: 'Card payment processing'
    }
  ];

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='bg-clr-14 flex shrink-0 flex-col items-center justify-start gap-16 self-stretch px-4 py-20 sm:px-6 lg:px-8'
    >
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-8'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className='grid w-full cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {topics.slice(0, 3).map((topic, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 1)}
              whileHover={{ y: -5 }}
              onClick={() => {
                navigate.push(`/payments/${topic.slug}`);
              }}
              className='bg-gradient-4 flex flex-col items-start justify-start gap-6 rounded-xl p-8 transition-all hover:bg-gray-900/70'
            >
              <div className='relative h-12 w-12 shrink-0'>
                <Image
                  src={topic.icon}
                  alt={topic.title}
                  width={48}
                  height={48}
                  className='h-full w-full object-contain'
                />
              </div>
              <div className='flex flex-col items-start justify-start gap-3'>
                <h3 className='gradient-text-2 text-left text-2xl leading-relaxed font-medium tracking-tight text-white'>
                  {topic.title}
                </h3>
                <p className='text-left text-base leading-normal tracking-tight text-gray-300'>
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='grid grid-cols-1 items-start justify-start gap-8 self-stretch md:grid-cols-1'>
          <motion.div
            className='bg-gradient-4 relative flex h-auto w-full flex-col items-start justify-start gap-6 rounded-[32px] p-12 md:h-56 md:flex-row'
            whileHover='hover'
          >
            {/* Content */}
            <div className='flex flex-1 flex-col items-center justify-start gap-3'>
              <h3 className='self-stretch text-center text-3xl leading-tight font-medium tracking-[1px] text-white'>
                GET STARTED QUICKLY
              </h3>
              <p className='self-stretch text-center text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                Move from discovery to production in 30 days
              </p>
              <button className='mt-3 cursor-pointer rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2e38] md:text-base'>
                Start Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CryptoBrowse;
