import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SmashPayCard = () => {
  const features = [
    {
      icon: '/home/check-icon0.svg',
      text: 'Globally Accepted'
    },
    {
      icon: '/home/check-icon0.svg',
      text: 'Track Expenses'
    },
    {
      icon: '/home/check-icon0.svg',
      text: 'No Minimum Balance'
    }
  ];

  return (
    <section className='bg-gradient-4 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden px-4 pt-32 pb-16 md:px-8'>
      <div className='flex w-full max-w-7xl flex-col items-center justify-start gap-12 lg:flex-row lg:gap-24'>
        {/* Image Section - Order changes on mobile */}
        <motion.div
          className='order-2 flex w-full flex-col items-center justify-start gap-12 lg:order-1 lg:w-1/2'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='relative aspect-[580/576] h-auto w-full max-w-[640px]'>
            <Image
              src='/home/card2.png'
              alt='SmashPay Card'
              fill
              className='object-cover'
              style={{
                boxShadow: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)'
                // transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className='order-1 flex w-full flex-col items-start justify-start gap-10 lg:order-2 lg:w-1/2'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full flex-col items-start justify-start gap-6'>
            <div className='flex w-full flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-center justify-center gap-0'>
                <h3 className='w-[150px] text-lg font-medium tracking-tight text-white'>SmashPay card</h3>
                <div className='border-gradient h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid' />
              </div>
              <h2 className='gradient-text w-full text-4xl leading-tight font-medium tracking-tighter text-transparent md:text-5xl lg:text-6xl'>
                The Ultimate Card Experience <br /> Across Borders
              </h2>
            </div>
            <p className='text-lg leading-relaxed tracking-tight text-gray-300'>
              Enjoy the flexibility of a SmashPay card. Spend anytime, <br /> anywhere around the world.
            </p>
            <div className='flex w-full flex-col items-start justify-start gap-5'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex w-full flex-row items-start justify-start gap-3'
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className='relative h-7 w-7 shrink-0 rounded-[14px]'>
                    <Image src={feature.icon} alt='Checkmark' width={28} height={28} />
                  </div>
                  <p className='flex-1 text-lg leading-relaxed tracking-tight text-gray-300'>
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <Link href={'/card'} passHref>
            <motion.div
              className='flex flex-row items-center justify-center gap-2.5 rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className='gradient-text text-lg font-semibold tracking-tight text-transparent'>
                Learn More
              </span>
              <img className='relative h-5 w-5 shrink-0 overflow-visible' src='/home/arrow-right0.svg' />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(
            112.59deg,
            rgba(55, 66, 93, 1) 0%,
            rgba(29, 33, 41, 1) 50.06%,
            rgba(41, 40, 60, 1) 100%
          );
          border-image-slice: 1;
          margin-top: -3px;
        }
      `}</style>
    </section>
  );
};

export default SmashPayCard;
