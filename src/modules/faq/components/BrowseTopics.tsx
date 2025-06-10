'use client';
import { fadeIn, staggerContainer } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BrowseTopics = () => {
  const navigate = useRouter();
  const { push } = navigate;
  const topics = [
    {
      icon: 'contact-us/icons/sending-money.svg',
      title: 'Sending money',
      slug: 'sending-money',
      description:
        'Sending a bank transfer Transfers between SmashPay users Transfers in Other Countries and Currencies'
    },
    {
      icon: 'contact-us/icons/profile-account.svg',
      title: 'Manage your account',
      slug: 'manage-your-account',
      description: 'Update Personal Details Currency account details Getting your account verified'
    },
    {
      icon: 'contact-us/icons/recive-money.svg',
      title: 'Receiving money',
      slug: 'receiving-money',
      description:
        'Request money from other users Receiving a money transfer with your account. Getting Paid by Card'
    },
    {
      icon: 'contact-us/icons/pay-card.svg',
      title: 'SmashPay card',
      slug: 'smashPay-card',
      description: 'Getting started with SmashPay card Spending fees Problem using cards'
    },
    {
      icon: 'contact-us/icons/conversion.svg',
      title: 'Conversion',
      slug: 'conversion',
      description: 'Creating conversion Foreign exchange rate calculation Minimum and maximum limit'
    },
    {
      icon: 'contact-us/icons/guides.svg',
      title: 'How to guides',
      slug: 'how-to-guides',
      description: 'Set up rate alerts Multi-currencies accounts Low balance alerts'
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
      <div className='relative flex w-full max-w-[1280px] flex-col items-center justify-start gap-16'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='flex w-full flex-col justify-start gap-4'
        >
          <p className='text-left text-xl leading-relaxed font-medium tracking-tight text-gray-400'>
            Browse topics
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className='grid w-full cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 1)}
              whileHover={{ y: -5 }}
              onClick={() => {
                navigate.push(`/faq/${topic.slug}`);
              }}
              className='flex flex-col items-start justify-start gap-6 rounded-xl bg-gray-900/50 p-8 transition-all hover:bg-gray-900/70'
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
                <h3 className='text-left text-lg leading-relaxed font-medium tracking-tight text-white'>
                  {topic.title}
                </h3>
                <p className='text-left text-base leading-normal tracking-tight text-gray-300'>
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BrowseTopics;
