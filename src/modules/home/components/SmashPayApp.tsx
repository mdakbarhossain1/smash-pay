'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SmashPayApp = () => {
  const features = [
    'Streamlined digital transfers on the go.',
    'Check live exchange rates.',
    'Faster repeat transfers with just a few taps.'
  ];

  return (
    <section className='bg-gradient-2 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden px-4 pt-32 pb-32 md:px-8'>
      <div className='flex w-full max-w-7xl flex-col items-center justify-start gap-12 lg:flex-row lg:gap-24'>
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-10 lg:w-1/2'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full flex-col items-start justify-start gap-6'>
            <div className='flex w-full flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-center justify-center gap-0'>
                <h3 className='text-lg font-medium tracking-tight text-white'>SmashPay App</h3>
                <div className='border-gradient h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid' />
              </div>
              <h2 className='gradient-text text-4xl leading-[1.1] font-medium tracking-tight text-transparent md:text-5xl lg:text-6xl'>
                One app for all <br /> your overseas transfers
              </h2>
            </div>
            <p className='text-lg leading-relaxed tracking-tight text-gray-300'>
              Send money on the go with the SmashPay app. We believe <br /> in keeping things simple, fast,
              and low-cost. Just a few taps <br /> and your money can be on its way.
            </p>
            <div className='flex w-full flex-col items-start justify-start gap-5'>
              {features.map((feature, index) => (
                <div key={index} className='flex w-full flex-row items-start justify-start gap-3'>
                  <div className='relative h-7 w-7 shrink-0 rounded-[14px]'>
                    <Image src={`/home/check-icon0.svg`} alt='Checkmark' width={28} height={28} />
                  </div>
                  <p className='flex-1 text-lg leading-relaxed tracking-tight text-gray-300'>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Image src={`/home/Mobile-app-store-badge.png`} alt='Checkmark' width={158} height={48} />
            <Image src={`/home/Mobile-google-play badge.png`} alt='Checkmark' width={158} height={48} />
          </div>
        </motion.div>

        <motion.div
          className='flex w-full flex-col items-center justify-start gap-12 lg:w-1/2'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex h-full w-full items-center justify-center text-gray-400'>
            <Image
              src={`/home/Smashpay-Content.png`}
              alt='content'
              width={600}
              height={600}
              unoptimized
              quality={100}
            />
            {/* <img src='/home/Smashpay-Content.png' alt='' /> */}
          </div>
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

export default SmashPayApp;
