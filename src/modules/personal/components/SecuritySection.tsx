'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SecuritySection = () => {
  const features = [
    {
      icon: '/personal/lock-01-10.svg',
      title: 'Protected',
      description:
        "Your money is held securely in a ring-fenced account. You can access your funds whenever you like and they're never invested or lent to anyone else."
    },
    {
      icon: '/personal/fingerprint-01-10.svg',
      title: 'Authenticated',
      description:
        'Your data is stored and protected behind multiple layers of authentication. Two factor authentication is enabled on your account for added security.'
    },
    {
      icon: '/personal/icon11.svg',
      title: 'Licensed and Regulated',
      description:
        'SmashPay complies with regulations and industry standards in the many markets around the world where we operate.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className='flex w-full flex-col items-center justify-start gap-16 overflow-hidden bg-gradient-to-b from-[#0c1118] to-[#1d1e2d] py-32'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-8 lg:flex-row lg:gap-24'>
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-16 lg:w-1/2'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className='flex w-full flex-col items-start justify-start gap-6'
            variants={itemVariants}
          >
            <h2 className='bg-gradient-to-b from-[#7b7d81] to-white bg-clip-text text-left text-5xl leading-tight font-medium tracking-[-2px] text-transparent md:text-6xl lg:text-7xl'>
              Bank-level Security
            </h2>
          </motion.div>

          <motion.div
            className='flex w-full flex-col items-start justify-start gap-8'
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className='flex w-full flex-row items-start justify-start gap-6 rounded-3xl'
                variants={itemVariants}
              >
                <div className='border-stroke-2 border-opacity-100 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border'>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <div className='flex flex-1 flex-col items-start justify-start gap-3'>
                  <h3 className='text-left text-xl leading-tight font-medium tracking-[-1px] text-white md:text-2xl'>
                    {feature.title}
                  </h3>
                  <p className='text-left text-lg leading-relaxed tracking-[-0.25px] text-gray-300'>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className='flex w-full flex-col items-center justify-start gap-12 lg:w-1/2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className='relative aspect-square w-full max-w-[640px] rounded-3xl'>
            <div className='relative h-full w-full'>
              <Image
                src='/personal/group18.svg'
                alt='Security illustration'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
