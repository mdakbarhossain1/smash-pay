import Image from 'next/image';

const DuoContentSection = () => {
  return (
    <section className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 md:py-32 lg:px-20'>
      {/* Background Circles */}
      <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
      <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />

      <div className='mx-auto flex max-w-7xl flex-col gap-8 p-6'>
        {/* First Content Wrapper */}
        <div className='relative flex-1 overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8'>
          {/* Blurred Blue BG Circle */}
          <div className='absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl'></div>

          {/* Content */}
          <div className='grid grid-cols-1 items-center gap-5 md:grid-cols-2'>
            {/* left */}
            <div className='relative z-10'>
              {/* Brand Boost Tag */}
              <div className='mb-4 inline-block rounded-md border border-purple-200/20 bg-purple-100/10 px-3 py-1 backdrop-blur-lg'>
                <span className='bg-gradient-to-r from-purple-300 to-teal-300 bg-clip-text font-medium text-transparent'>
                  BRAND BOOST
                </span>
              </div>

              <h2 className='mb-4 text-3xl font-bold text-white'>Tokenized Assets</h2>
              <p className='mb-6 text-gray-300'>
                Convert real-world assets into digital tokens for easier trading and <br /> liquidity.
              </p>

              {/* Features List */}
              <div className='mb-8 space-y-4'>
                <div className='flex items-center gap-3'>
                  <svg className='h-6 w-6 text-white' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z'></path>
                  </svg>
                  <p className='text-white'>Fractional Ownership of Assets</p>
                </div>

                <div className='flex items-center gap-3'>
                  <svg className='h-6 w-6 text-white' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M232,40a8,8,0,0,1-8,8H180a8,8,0,0,1,0-16h40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,232,40ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z'></path>
                  </svg>
                  <p className='text-white'>Increased Asset Liquidity</p>
                </div>

                <div className='flex items-center gap-3'>
                  <svg className='h-6 w-6 text-white' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z'></path>
                  </svg>
                  <p className='text-white'>Simplified Asset Transfer Process</p>
                </div>
              </div>

              <button className='rounded-xl bg-teal-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-teal-200'>
                Get Started
              </button>
            </div>

            {/* right */}
            <div className='mt-10 md:mt-0'>
              <Image
                src={`/home/how-to-get-start.svg`}
                alt='Star'
                // layout='fill'
                width={512}
                height={530}
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Second Content Wrapper */}
        <div className='relative flex-1 overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8'>
          {/* Blurred Blue BG Circles */}
          <div className='absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl'></div>
          <div className='absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl'></div>

          {/* Content */}
          <div className='grid grid-cols-1 items-center gap-5 md:grid-cols-2'>
            {/* left */}
            <div className='mb-10 md:mb-0'>
              <Image
                src={`/business/Checkout.svg`}
                alt='Star'
                // layout='fill'
                width={512}
                height={530}
                className='object-contain'
              />
            </div>

            {/* right */}
            <div className='relative z-10'>
              {/* Speedy Tag */}
              <div className='mb-4 inline-block rounded-md border border-purple-200/20 bg-purple-100/10 px-3 py-1 backdrop-blur-lg'>
                <span className='bg-gradient-to-r from-purple-300 to-teal-300 bg-clip-text font-medium text-transparent'>
                  SPEEDY
                </span>
              </div>

              <h2 className='mb-4 text-3xl font-bold text-white'>Instant Global Transactions</h2>
              <p className='mb-6 text-gray-300'>
                Experience seamless and rapid global transactions powered by blockchain technology.
              </p>

              {/* Features List */}
              <div className='mb-8 space-y-4'>
                <div className='flex items-center gap-3'>
                  <svg className='h-6 w-6 text-white' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z'></path>
                  </svg>
                  <p className='text-white'>Rapid Cross-Border Payments</p>
                </div>

                <div className='flex items-center gap-3'>
                  <svg className='h-6 w-6 text-white' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z'></path>
                  </svg>
                  <p className='text-white'>Low Transaction Fees</p>
                </div>

                <div className='flex items-center gap-3'>
                  <svg className='h-6 w-6 text-white' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z'></path>
                  </svg>
                  <p className='text-white'>Real-Time Transaction Tracking</p>
                </div>
              </div>

              <button className='rounded-xl bg-teal-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-teal-200'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuoContentSection;
