'use client';
import { motion } from 'framer-motion';

interface PaymentOption {
  id: number;
  title: string;
  description: string;
}

const SectionWhoAreWe = () => {
  const paymentOptions: PaymentOption[] = [
    {
      id: 1,
      title: 'Planning',
      description: 'rapid and seamless cross‑border expansion'
    },
    {
      id: 2,
      title: 'Seeking',
      description: 'to seamlessly acquire customers locally in LATAM, APAC, Africa, India, and the EU'
    },
    {
      id: 3,
      title: 'Looking',
      description: 'to eliminate payment complexities and intermediaries'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className='bg-gradient relative flex w-full flex-col items-center justify-start gap-16 self-stretch py-32'>
      {/* Header Section */}
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-3 px-8'>
        <motion.div
          className='flex flex-col items-center justify-start gap-10 self-stretch'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div
            className='flex flex-col items-center justify-start gap-6 self-stretch'
            variants={itemVariants}
          >
            {/* Title with underline */}
            <div className='flex flex-col items-center justify-center gap-0'>
              <div className='relative h-[23px] w-[115px]'>
                <h3 className='absolute top-0 left-0 text-left text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                  Who we’re for
                </h3>
              </div>
              <div
                className='relative -mt-[3px] h-0 w-full border-t-[3px] border-transparent'
                style={{
                  borderImage: 'linear-gradient(112.59deg, #37425D 0%, #1D2129 50.06%, #29283C 100%) 1'
                }}
              />
            </div>

            {/* Main Heading */}
            <motion.h2
              className='gradient-text self-stretch text-center text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl'
              variants={itemVariants}
            >
              Our clients range across a broad range of sectors, meaning we understand payments and we
              understand growth.
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Payment Options Grid */}
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-24 px-8'>
        <motion.div
          className='flex flex-col items-start justify-start gap-8 self-stretch'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {/* First Row */}
          <motion.div
            className='grid grid-cols-1 items-start justify-start gap-4 self-stretch md:grid-cols-3'
            variants={containerVariants}
          >
            {paymentOptions.slice(0, 3).map((option) => (
              <motion.div
                key={option.id}
                className='bg-gradient-4 relative flex h-auto w-full flex-col items-start justify-start gap-6 rounded-[32px] p-8 md:flex-row'
                variants={itemVariants}
                whileHover='hover'
              >
                {/* Content */}
                <div className='flex flex-1 flex-col items-start justify-start gap-3'>
                  <h3 className='gradient-text-2 self-stretch pb-1 text-left text-2xl leading-tight font-medium tracking-[1px] text-white'>
                    {option.title}
                  </h3>
                  <p className='self-stretch text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWhoAreWe;
