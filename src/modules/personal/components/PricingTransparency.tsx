'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PricingTransparency = () => {
  const features = [
    {
      id: 1,
      title: 'Send fees',
      description: "The send fee is a small and flat charge of 0.39% of the amount that's converted."
    },
    {
      id: 2,
      title: 'Payment method fees',
      description:
        'Customers in some countries are charged a fee when they use a credit or debit card to pay for their transfer.'
    }
  ];

  const trackingFeatures = ['Check via mobile app.', 'SMS updates.', 'Email notifications.'];

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

  return (
    <section
      className='relative flex w-full flex-col items-center justify-start gap-32 self-stretch overflow-hidden pt-32 pb-32'
      style={{
        background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
      }}
    >
      {/* First Row - Pricing Transparency */}
      <motion.div
        className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-12 px-8 lg:flex-row lg:gap-24'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        {/* Left Content */}
        <motion.div
          className='relative flex flex-1 flex-col items-start justify-start gap-10'
          variants={itemVariants}
        >
          <div className='flex flex-col items-start justify-start gap-8 self-stretch'>
            <h2 className='self-stretch bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-left text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl'>
              What you see is <br /> what you pay
            </h2>

            <div className='flex flex-col items-start justify-start gap-6 self-stretch'>
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className='flex flex-col items-start justify-start gap-2 self-stretch'
                  variants={itemVariants}
                >
                  <h3 className='text-left text-xl leading-tight font-semibold tracking-[-0.5px] text-white'>
                    {feature.title}
                  </h3>
                  <p className='text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className='flex flex-row items-center justify-start gap-4'
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className='flex flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4'>
              <span className='text-lg leading-tight font-semibold tracking-[-0.25px] text-white'>
                Get started
              </span>
              <Image src='/home/arrow-right0.svg' alt='Arrow right' width={22} height={22} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image Placeholder */}
        <motion.div
          className='flex w-full flex-col items-center justify-start gap-12 lg:w-auto'
          variants={itemVariants}
        >
          <Image src='/personal/Payment-breakdown.png' alt='Arrow right' width={412} height={424} />
        </motion.div>
      </motion.div>

      {/* Second Row - Transfer Tracking */}
      <motion.div
        className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-12 px-8 lg:flex-row lg:gap-24'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        {/* Left Image - Transfer Card */}
        <motion.div
          className='order-2 flex w-full flex-col items-center justify-start gap-12 lg:order-1 lg:w-auto'
          variants={itemVariants}
        >
          <div className='relative h-[746px] w-full lg:w-[640px]'>
            {/* Transfer Card */}
            <motion.div
              className='absolute bottom-0 left-0 flex w-full flex-col items-start justify-start overflow-hidden rounded-[32px] bg-gray-50 p-5 lg:w-[420px]'
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Card Top */}
              <div
                className='flex h-[270px] w-full flex-col items-center justify-start gap-6 rounded-tl-3xl rounded-tr-3xl pt-8 pb-8'
                style={{
                  background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
                }}
              >
                <button className='flex flex-row items-center justify-center gap-2 overflow-hidden rounded-[50px] border border-solid bg-gradient-to-b from-[#151820] to-[#010101] p-3.5'>
                  <Image src='/personal/send-010.svg' alt='Send' width={22} height={22} />
                </button>

                <div className='flex flex-col items-center justify-start gap-2'>
                  <h3 className='text-center text-2xl leading-tight font-medium tracking-[-1.5px] text-white'>
                    750 USD
                  </h3>
                  <p className='text-center text-lg leading-7 font-normal tracking-[-0.25px] text-gray-300'>
                    To <span className='font-semibold'>Micah Richards</span>
                  </p>
                </div>
              </div>

              {/* Card Bottom */}
              <div className='relative -mt-8 h-[352px] w-full overflow-hidden rounded-3xl bg-white'>
                <div className='flex w-full flex-col items-start justify-start gap-4 p-8'>
                  {/* Timeline Item 1 */}
                  <div className='flex w-full flex-row items-center justify-start gap-4'>
                    <div className='flex w-[52px] flex-col items-center justify-start gap-0.5'>
                      <p className='text-center text-base leading-tight tracking-[-0.25px] text-gray-500'>
                        2 Jul
                      </p>
                      <p className='text-center text-base leading-tight tracking-[-0.25px] text-gray-500'>
                        10:30
                      </p>
                    </div>
                    <div className='h-[60px] w-1 rounded-sm bg-green-900'></div>
                    <p className='text-left text-base leading-tight tracking-[-0.25px] text-gray-500'>
                      Approved by SmashPay
                    </p>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className='flex w-full flex-row items-center justify-start gap-4'>
                    <div className='flex w-[52px] flex-col items-center justify-start gap-0.5'>
                      <p className='text-center text-base leading-tight tracking-[-0.25px] text-gray-500'>
                        Today
                      </p>
                      <p className='text-center text-base leading-tight tracking-[-0.25px] text-gray-500'>
                        14:20
                      </p>
                    </div>
                    <div className='h-[60px] w-1 rounded-sm bg-green-900'></div>
                    <div className='flex flex-col items-start justify-center gap-0.5'>
                      <p className='text-left text-base leading-tight font-medium tracking-[-0.25px] text-green-900'>
                        Sending to Micah's bank
                      </p>
                      <p className='text-left text-sm leading-tight tracking-[-0.25px] text-gray-500'>
                        It can take up to one business day.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className='flex w-full flex-row items-center justify-start gap-4'>
                    <div className='flex w-[52px] flex-col items-center justify-start gap-0.5'>
                      <p className='text-center text-base leading-tight tracking-[-0.25px] text-gray-500'>
                        est
                      </p>
                      <p className='text-center text-base leading-tight tracking-[-0.25px] text-gray-500'>
                        4 Jul
                      </p>
                    </div>
                    <div className='h-[60px] w-1 rounded-sm bg-gray-300'></div>
                    <p className='text-left text-base leading-tight tracking-[-0.25px] text-gray-500'>
                      Received by Micah's bank
                    </p>
                  </div>
                </div>

                {/* Share Button */}
                <button className='absolute bottom-8 mx-8 flex w-[calc(100%-64px)] flex-row items-center justify-center gap-2 overflow-hidden rounded-[48px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-[25px] py-3'>
                  <span className='text-base leading-tight font-semibold tracking-[-0.25px] text-white'>
                    Share with recipient
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className='absolute top-0 right-[53px] hidden h-[300px] w-[300px] overflow-hidden lg:block'>
              <Image src='/personal/group3.svg' alt='Decorative element' fill className='object-contain' />
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className='order-1 flex flex-1 flex-col items-start justify-start gap-10 lg:order-2'
          variants={itemVariants}
        >
          <div className='flex flex-col items-start justify-start gap-8 self-stretch'>
            <h2 className='w-full bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-left text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl lg:w-[468px]'>
              Get real-time <br /> updates on any <br /> transfer you send
            </h2>

            <p className='self-stretch text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
              Track the status of your online transfers in real-time, via website or directly in the app, so
              you'll always know where your money is.
            </p>

            <div className='flex flex-col items-start justify-start gap-5 self-stretch'>
              {trackingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex flex-row items-start justify-start gap-3 self-stretch'
                  variants={itemVariants}
                >
                  <Image
                    src={`/home/check-icon0.svg`}
                    alt='Check'
                    width={28}
                    height={28}
                    className='rounded-[14px]'
                  />
                  <p className='flex-1 text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className='flex flex-row items-center justify-start gap-4'
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className='flex flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4'>
              <span className='text-lg leading-tight font-semibold tracking-[-0.25px] text-white'>
                Get started
              </span>
              <Image src='/home/arrow-right0.svg' alt='Arrow right' width={22} height={22} />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingTransparency;
