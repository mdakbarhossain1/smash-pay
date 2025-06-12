'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
type Leader = {
  id: number;
  name: string;
  title: string;
  image: string;
  linkedin: string;
};

const LeadershipSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leaders: Leader[] = [
    {
      id: 1,
      name: 'Reece James',
      title: 'Co-founder & CEO',
      image: '/about-us/reca-jems.png',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Phil Jones',
      title: 'Co-founder & CMO',
      image: '/about-us/phil-jones.png',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Gabrielė Selena',
      title: 'Head of Communication',
      image: '/about-us/gabrial.png',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Jason Mckinney',
      title: 'Chief Technology Officer',
      image: '/about-us/jason.png',
      linkedin: '#'
    },
    {
      id: 5,
      name: 'Ànghela Henk',
      title: 'Chief Financial Officer',
      image: '/about-us/anhela.png',
      linkedin: '#'
    }
  ];

  const visibleLeaders = leaders.slice(currentSlide, currentSlide + 4);

  const nextSlide = () => {
    if (currentSlide + 4 < leaders.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section
      className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch py-32'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <div className='w-full max-w-7xl px-8'>
        <div className='flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-clip-text text-5xl leading-tight font-medium text-white md:text-6xl'
          >
            Our leadership
          </motion.h2>

          <div className='flex flex-row items-center gap-3'>
            <div className='flex flex-col items-center gap-2.5 px-5'>
              <span className='text-lg font-normal tracking-tight text-white md:text-xl'>
                {currentSlide + 1}/{leaders.length - 3}
              </span>
            </div>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex h-[72px] w-[72px] items-center justify-center rounded-[78px] border border-[#3c414c] p-4 ${
                currentSlide === 0 ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              <HiChevronLeft className='h-6 w-6 text-white' />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide + 4 >= leaders.length}
              className={`flex h-[72px] w-[72px] items-center justify-center rounded-[78px] border border-[#3c414c] p-4 ${
                currentSlide + 4 >= leaders.length
                  ? 'cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-b from-[#151820] to-[#010101]'
              }`}
            >
              <HiChevronRight className='h-6 w-6 text-white' />
            </button>
          </div>
        </div>
      </div>

      <div className='w-full max-w-7xl overflow-hidden px-8'>
        <motion.div
          className='flex gap-8'
          animate={{
            x: `-${currentSlide * (268 + 32)}px`
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='flex min-w-[268px] flex-col gap-6'
            >
              <div className='relative h-[360px] w-[268px] overflow-hidden rounded-3xl'>
                <Image src={leader.image} alt={leader.name} fill className='object-cover' />
              </div>
              <div className='flex flex-row items-start gap-4'>
                <div className='relative h-7 w-px'>
                  <div
                    className='absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2'
                    style={{
                      background:
                        'linear-gradient(111.92deg, rgba(168, 210, 70, 1) 0%, rgba(150, 209, 65, 1) 34.66%, rgba(55, 183, 51, 1) 100%)'
                    }}
                  ></div>
                </div>
                <div className='flex flex-1 flex-col gap-4'>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-xl font-medium tracking-tight text-white md:text-2xl'>
                      {leader.name}
                    </h3>
                    <p className='text-base font-normal tracking-tight text-gray-300 md:text-lg'>
                      {leader.title}
                    </p>
                  </div>
                  <a href={leader.linkedin} target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='h-6 w-6 text-white transition-colors duration-200 hover:text-[#0077b5]' />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
