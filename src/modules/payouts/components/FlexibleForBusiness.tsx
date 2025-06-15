'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FlexibleForBusiness = () => {
  const cards = [
    {
      title: 'Tailored payouts',
      description: 'Ensure flexibility with customizable payouts for unique business needs',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' className='h-6 w-6'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 21c0-2.652-3.134-4.8-7-4.8S5 18.348 5 21m7-8.4a4.6 4.6 0 0 1-3.3-1.406A4.87 4.87 0 0 1 7.333 7.8 4.87 4.87 0 0 1 8.7 4.406 4.6 4.6 0 0 1 12 3c1.238 0 2.425.506 3.3 1.406A4.87 4.87 0 0 1 16.667 7.8a4.87 4.87 0 0 1-1.367 3.394A4.6 4.6 0 0 1 12 12.6'
          ></path>
        </svg>
      )
    },
    {
      title: 'Postponed payouts',
      description: 'Optimize cash flow by settling payments at your convenience',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' className='h-6 w-6'>
          <circle
            cx='12.6'
            cy='13.4'
            r='8'
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth='2'
          ></circle>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m12.6 13.4 3-3M9.6 2.4h6'
          ></path>
        </svg>
      )
    },
    {
      title: 'Scheduled payouts',
      description: 'Streamline operations with regular or recurring payouts at set intervals',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' className='h-6 w-6'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17.4 5H6.6C4.612 5 3 6.592 3 8.556v8.889C3 19.408 4.612 21 6.6 21h10.8c1.988 0 3.6-1.592 3.6-3.555v-8.89C21 6.593 19.388 5 17.4 5M8.4 3v3.5M15.6 3v3.5M3 10h18'
          ></path>
        </svg>
      )
    },
    {
      title: 'Bulk payouts',
      description: 'Reduce time and cost by making payouts in bulk/batches',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' className='h-6 w-6'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M22 20c0-1.858-1.856-3.438-4.444-4.024M15.333 20c0-2.357-2.984-4.267-6.666-4.267S2 17.643 2 20m13.333-7.467a4.54 4.54 0 0 0 3.143-1.25 4.18 4.18 0 0 0 1.302-3.016 4.18 4.18 0 0 0-1.302-3.017A4.54 4.54 0 0 0 15.333 4m-6.666 8.533a4.54 4.54 0 0 1-3.143-1.25 4.18 4.18 0 0 1-1.302-3.016c0-1.132.468-2.217 1.302-3.017A4.54 4.54 0 0 1 8.667 4c1.178 0 2.309.45 3.142 1.25a4.18 4.18 0 0 1 1.302 3.017 4.18 4.18 0 0 1-1.302 3.017 4.54 4.54 0 0 1-3.142 1.25'
          ></path>
        </svg>
      )
    }
  ];

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
    <section className='bg-clr-14 relative w-full overflow-hidden'>
      <div className='relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Background Images */}
        <img
          className='absolute top-0 left-0 -z-10 w-48 object-contain sm:w-64 lg:w-80'
          src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-flexible-for-business/flexible__img-02.png'
          alt='Background Shape 1'
        />
        <img
          className='absolute right-0 bottom-0 -z-10 w-48 object-contain sm:w-64 lg:w-80'
          src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-flexible-for-business/flexible__img-01.png'
          alt='Background Shape 2'
        />

        {/* Motion Content */}
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={container}
          className='flex flex-col items-center'
        >
          <motion.h2 variants={item} className='mb-12 text-center text-3xl font-bold text-white md:text-4xl'>
            Flexible for <span className='text-gray'>any business</span>
          </motion.h2>

          <motion.ul variants={container} className='mb-12 grid w-full grid-cols-1 gap-6 md:grid-cols-4'>
            {cards.map((card, index) => (
              <motion.li
                key={index}
                variants={item}
                custom={index}
                className='group relative flex h-72 flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-transparent p-6 text-center text-white transition-all duration-300 hover:bg-[#c9f73a] hover:shadow-xl'
              >
                {/* Default View */}
                <div className='flex h-full flex-col items-center justify-between transition-opacity duration-300 group-hover:opacity-0'>
                  <h3 className='text-xl font-semibold text-white transition-opacity duration-300 group-hover:opacity-60'>
                    {card.title}
                  </h3>
                  <div className='flex flex-col items-center'>
                    <div className='text-4xl'>{card.icon}</div>
                    <span className='mt-2 inline-flex items-center font-medium'>See more</span>
                  </div>
                </div>

                {/* Hover View */}
                <div className='absolute inset-0 flex h-full flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <h3 className='mb-3 text-xl font-bold text-black opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                    {card.title}
                  </h3>
                  <p className='text-base text-black'>{card.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={item}>
            <Link
              href='#apply-form'
              className='group inline-flex items-center rounded-lg bg-gradient-to-b from-[#151820] to-[#010101] px-6 py-3 font-medium text-white transition-colors duration-300'
            >
              <span className='mr-2'>Get started</span>
              <div className='relative h-5 w-5'>
                <svg
                  className='icon-move-16 absolute inset-0 h-full w-full'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.2929 17.7071L6.29289 7.70712L7.70711 6.29291L17.7071 16.2929L16.2929 17.7071Z'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.5858 16L6.29289 7.70712L7.70711 6.29291L16 14.5858V8.00002C16 7.44773 16.4477 7.00001 17 7.00001C17.5523 7.00001 18 7.44773 18 8.00002V17C18 17.5523 17.5523 18 17 18H8C7.44771 18 7 17.5523 7 17C7 16.4477 7.44771 16 8 16H14.5858Z'
                  ></path>
                </svg>
                <svg
                  className='icon-move-22 absolute inset-0 h-full w-full opacity-0 transition-opacity group-hover:opacity-100'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.2929 17.7071L6.29289 7.70712L7.70711 6.29291L17.7071 16.2929L16.2929 17.7071Z'
                  ></path>
                </svg>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexibleForBusiness;
