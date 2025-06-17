'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EcosystemSlider = () => {
  // Image data for the sliders
  const ticker1Images = [
    { id: 6, src: 'https://framerusercontent.com/images/otECLEmpLx2FJMtQZkbyRXrbc.png' },
    { id: 7, src: 'https://framerusercontent.com/images/DyZjhZWcHHc4FHg4UCerDnIUs.png' },
    { id: 8, src: 'https://framerusercontent.com/images/NuJstkqgukba6uiHVUNBmEgUHU.png' },
    { id: 9, src: 'https://framerusercontent.com/images/ExpFZXks35lbZW5cNBvDOulkixY.png' },
    { id: 10, src: 'https://framerusercontent.com/images/Jj712vp6AaAnkdFixQLdLaMJ0NQ.png' },
    { id: 1, src: 'https://framerusercontent.com/images/chMOlUKAunjSaqnpZxC6HLvjPQ.png' },
    { id: 2, src: 'https://framerusercontent.com/images/1XqTciqHgqr4Nqfwttf9OcD2bo.png' },
    { id: 3, src: 'https://framerusercontent.com/images/5qmOKxVOqwZpYcKAJvVWGzKM.png' }
  ];

  const ticker2Images = [
    { id: 11, src: 'https://framerusercontent.com/images/U3DkPqvjJTujNybTUrc4EcNDGy0.png' },
    { id: 12, src: 'https://framerusercontent.com/images/HDTz98eCrptqlEIMAHSY4sgo3C0.png' },
    { id: 13, src: 'https://framerusercontent.com/images/YqlQiUhgyuF4Fh10xl2y8fXX8.png' },
    { id: 14, src: 'https://framerusercontent.com/images/XZuPBSBdQz1BMhgIVtHAuOmKKkk.png' },
    { id: 15, src: 'https://framerusercontent.com/images/ogMOpP0Odq1him4YJZCz6Jl1XVE.png' },
    { id: 4, src: 'https://framerusercontent.com/images/uuJgHQnAJUdfdKXM519v4qwjmFM.png' },
    { id: 5, src: 'https://framerusercontent.com/images/cfPSz6YZRx9yMKugd9AzGFNAug0.png' },
    { id: 21, src: 'https://framerusercontent.com/images/kNrQHn977zu7hgT9N7tsExo8rgY.png' }
  ];

  const ticker3Images = [
    { id: 16, src: 'https://framerusercontent.com/images/pXf2zxvIB4Dfvrf8CBUgesDD4A.png' },
    { id: 17, src: 'https://framerusercontent.com/images/Xo8EwwReTONeRrZqkgpHAbuxw.png' },
    { id: 18, src: 'https://framerusercontent.com/images/PV5O5gVmxRyZuOVGuUs0tXryB4.png' },
    { id: 19, src: 'https://framerusercontent.com/images/CCvpQZ69TCqOtmqvrruJtCLpY8c.png' },
    { id: 20, src: 'https://framerusercontent.com/images/yYVlwNKV3SWLYsLcrGka9peGFY.png' },
    { id: 22, src: 'https://framerusercontent.com/images/0878dAnh7CUyUAXgyUhbTLOQg5Y.png' },
    { id: 23, src: 'https://framerusercontent.com/images/VTMqkGRQzQlSUGxjz4BofRheJLo.png' },
    { id: 24, src: 'https://framerusercontent.com/images/aYyZPSCfMSJnek2gUqoM2eVlw.png' }
  ];

  const verticalSliderVariants = {
    down: {
      x: ['0%', '-60%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear'
        }
      }
    },
    up: {
      x: ['-60%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear'
        }
      }
    }
  };

  // Animation for the container
  const containerVariants = {
    hidden: { opacity: 0, rotate: -45, y: '-50%' },
    visible: {
      opacity: 1,
      rotate: -45,
      y: '-50%',
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <div
        className='relative m-auto w-full max-w-7xl overflow-hidden rounded-lg border border-[rgba(191,162,246,0.2)] bg-[rgba(191,162,246,0.1)] p-8 text-start backdrop-blur-[20px]'
        style={{
          background:
            'linear-gradient(135deg,var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, #31353f) 0%,var(--token-ad1f0f62-7edb-4a0e-83cc-532215fdd7d2, rgb(10, 13, 20)) 100%)'
        }}
      >
        {/* Content section */}
        <div className='relative z-10'>
          <div className='mb-6'>
            <div className='mb-4 inline-block rounded-md border border-[rgba(191,162,246,0.2)] bg-[rgba(191,162,246,0.1)] px-3 py-1 text-sm backdrop-blur-[20px]'>
              <span className='bg-gradient-to-r from-[#BFA2F6] to-[#50F8E4] bg-clip-text text-transparent'>
                ECOSYSTEM
              </span>
            </div>
            <h2 className='mb-4 text-4xl font-bold text-white'>
              Interoperable <br />
              Ecosystem
            </h2>
            <p className='max-w-2xl text-start text-lg text-gray-300'>
              Our platform supports cross-chain interactions, ensuring seamless integration with other
              blockchain networks.
            </p>
          </div>
        </div>

        {/* Slider container */}
        <motion.div
          className='absolute -right-[200px] w-full md:-right-[350px]'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {/* First slider */}
          <div className='mask-image-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] relative my-2 h-[100px] w-full overflow-hidden'>
            <motion.div
              className='absolute flex items-center gap-6'
              variants={verticalSliderVariants}
              animate='down'
            >
              {[...ticker1Images, ...ticker1Images, ...ticker1Images].map((img, index) => (
                <div
                  key={`${img.id}-${index}`}
                  className='relative flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-lg'
                  style={{ backgroundColor: 'var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, #31353f)' }}
                >
                  <Image
                    src={img.src}
                    alt={`Integration ${img.id}`}
                    height={50}
                    width={50}
                    className='rounded-lg object-contain'
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second slider */}
          <div className='mask-image-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] relative my-2 h-[100px] w-full overflow-hidden'>
            <motion.div
              className='absolute flex items-center gap-6'
              variants={verticalSliderVariants}
              animate='up'
              style={{ x: '-100%' }}
            >
              {[...ticker2Images, ...ticker2Images, ...ticker2Images].map((img, index) => (
                <div
                  key={`${img.id}-${index}`}
                  className='relative flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-lg'
                  style={{ backgroundColor: 'var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, #31353f)' }}
                >
                  <Image
                    src={img.src}
                    alt={`Integration ${img.id}`}
                    height={50}
                    width={50}
                    className='rounded-lg object-contain'
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Third slider */}
          <div className='mask-image-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] relative my-2 h-[100px] w-full overflow-hidden'>
            <motion.div
              className='absolute flex items-center gap-6'
              variants={verticalSliderVariants}
              animate='down'
            >
              {[...ticker3Images, ...ticker3Images, ...ticker3Images].map((img, index) => (
                <div
                  key={`${img.id}-${index}`}
                  className='relative flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-lg'
                  style={{ backgroundColor: 'var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, #31353f)' }}
                >
                  <Image
                    src={img.src}
                    alt={`Integration ${img.id}`}
                    height={50}
                    width={50}
                    className='rounded-lg object-contain'
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default EcosystemSlider;
