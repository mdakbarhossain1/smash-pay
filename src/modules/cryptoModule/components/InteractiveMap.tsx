'use client';
import Image from 'next/image';

type Region = {
  id: string;
  name: string;
  imageUrl: string;
  paymentMethodsUrl: string;
  positionClasses: string;
};

const InteractiveMap = () => {
  return (
    <div className='bg-clr-14 mx-auto w-full'>
      <div className='mx-auto max-w-7xl px-4 py-12 md:py-20'>
        <div className='mb-12 text-center'>
          <h1 className='gradient-text-2 mb-4 text-3xl font-bold md:text-5xl'>
            NO MIDDLEMEN, <br />
            <span className='text-primary'>NO INTERMEDIARIES</span>
          </h1>
          <p className='mx-auto max-w-3xl text-lg text-gray-600 md:text-xl'>
            By leveraging Unlimit's payments portfolio, consisting of 1000+ directly integrated payment
            methods and all major card brands, Unlimit Crypto processes directly for a fraction of the cost of
            traditional On-Ramps
          </p>
        </div>

        <div className='relative aspect-[2/1] max-h-[600px] w-full'>
          <div className='absolute inset-0 overflow-hidden rounded-xl'>
            {/* World Map Background */}
            <Image src='/maps/all-region.svg' alt='world map' fill className='object-contain' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
