'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  isFeatured?: boolean;
}

const OpportunitiesSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('Business Development');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const departments = [
    'Analytics',
    'Business Development',
    'Communications',
    'Design',
    'Engineering & Data',
    'Finance',
    'HR & Culture',
    'Legal',
    'Marketing',
    'Operations',
    'Product',
    'Sales & Account Management'
  ];

  const locations = [
    'All',
    'Yogyakarta',
    'San Fransisco',
    'London',
    'Berlin',
    'Paris',
    'Dubai',
    'Beijing',
    'Singapore'
  ];

  const jobPositions: JobPosition[] = [
    {
      title: 'Business Operations Manager - Saving, Lending & Insurance',
      department: 'Operations',
      location: 'London'
    },
    {
      title: 'Associate Technical Product Manager',
      department: 'Product',
      location: 'Yogyakarta',
      isFeatured: true
    },
    {
      title: 'Head of Business Development',
      department: 'Business Development',
      location: 'Berlin'
    },
    {
      title: 'Software Engineer (iOS)',
      department: 'Engineering & Data',
      location: 'San Fransisco'
    },
    {
      title: 'Senior User Interface Designer',
      department: 'Design',
      location: 'Singapore'
    },
    {
      title: 'Lead Financial Controller (Group Controlling)',
      department: 'Finance',
      location: 'Dubai'
    },
    {
      title: 'Performance Marketing Manager',
      department: 'Marketing',
      location: 'Paris'
    },
    {
      title: 'Recruitment Sourcer - Business Hiring',
      department: 'HR & Culture',
      location: 'Beijing'
    }
  ];

  const filteredPositions = jobPositions.filter(
    (job) =>
      (selectedDepartment === 'All' || job.department === selectedDepartment) &&
      (selectedLocation === 'All' || job.location === selectedLocation)
  );

  return (
    <div className='bg-bg bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch px-4 pt-32 pb-32 md:px-8 lg:px-16'>
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-3'>
        <div className='flex w-full flex-col items-center justify-start gap-16'>
          <div className='flex w-full flex-col items-center justify-start gap-8 lg:flex-row lg:items-center lg:gap-16'>
            {/* Left Text Block */}
            <div className='flex w-full flex-col items-start justify-start gap-6 lg:w-96'>
              {/* Heading + Underline */}
              <div className='flex flex-col items-center justify-center gap-0'>
                <h2 className='text-lg font-medium tracking-tight text-white'>Opportunities</h2>
                <div className='mt-[-3px] h-[3px] w-full bg-gradient-to-r from-[#37425D] via-[#1D2129] to-[#29283C]' />
              </div>

              {/* Main Title */}
              <h1 className='w-full text-4xl font-medium tracking-tighter text-white md:text-5xl'>
                Find the right role for you
              </h1>
            </div>

            {/* Right Side Text */}
            <p className='w-full text-center text-xl font-medium tracking-tight text-white md:text-2xl lg:flex-1 lg:text-left'>
              We have 72 open positions
            </p>
          </div>
        </div>
      </div>

      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-8 lg:flex-row lg:gap-24'>
        <div className='flex w-full flex-row items-start justify-start gap-16 lg:w-auto'>
          <div className='flex w-full flex-col items-start justify-start gap-8 lg:w-64'>
            <div className='flex w-full flex-col items-start justify-start gap-4'>
              <div className='flex w-full flex-row items-center justify-between gap-2.5'>
                <h3 className='text-base font-semibold tracking-tight text-white'>Department</h3>
                <button
                  onClick={() => {
                    setSelectedDepartment('All');
                    setSelectedLocation('All');
                  }}
                  className='text-base font-semibold tracking-tight text-gray-300 transition-colors hover:text-white'
                >
                  Clear
                </button>
              </div>
              <div className='flex w-full flex-col items-start justify-start gap-3'>
                {departments.map((dept) => (
                  <div
                    key={dept}
                    className='flex cursor-pointer flex-row items-center justify-start gap-3'
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    <div className='flex items-center justify-center'>
                      <div
                        className={`border-stroke-2 flex h-5 w-5 items-center justify-center rounded-md border ${
                          selectedDepartment === dept ? 'bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E]' : ''
                        }`}
                      >
                        {selectedDepartment === dept && (
                          <svg
                            className='h-[70%] w-[70%]'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M20 6L9 17L4 12'
                              stroke='white'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-lg text-gray-300 ${selectedDepartment === dept ? 'text-white' : ''}`}
                    >
                      {dept}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent' />

            <div className='flex w-full flex-col items-start justify-start gap-4'>
              <h3 className='w-full text-base font-semibold tracking-tight text-white'>Location</h3>
              <div className='flex w-full flex-wrap items-start justify-start gap-2'>
                {locations.map((loc) => (
                  <motion.button
                    key={loc}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`border-stroke-2 rounded-full border px-4 py-2 text-sm font-semibold tracking-tight ${
                      selectedLocation === loc
                        ? 'bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] text-white'
                        : 'text-gray-300'
                    }`}
                    onClick={() => setSelectedLocation(loc)}
                  >
                    {loc}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col items-start justify-start gap-8 lg:w-[768px]'>
          <div className='w-full'>
            <div className='border-stroke-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border p-4'>
              <div className='flex flex-1 flex-row items-center justify-start gap-2'>
                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                    stroke='#9CA3AF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M21 21L16.65 16.65'
                    stroke='#9CA3AF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <input
                  type='text'
                  placeholder='Search all jobs'
                  className='w-full border-none bg-transparent text-lg text-gray-300 placeholder-gray-400 outline-none'
                />
              </div>
            </div>
          </div>

          <div className='flex w-full flex-col items-start justify-start gap-5'>
            {filteredPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`border-stroke-2 w-full rounded-2xl border p-7 ${
                  job.isFeatured ? 'bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E]' : ''
                }`}
              >
                <div className='flex w-full flex-col justify-between gap-3 lg:flex-row lg:items-center'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-xl font-medium tracking-tight text-white md:text-2xl'>{job.title}</h3>
                    <div className='border-stroke-2 flex w-fit flex-row items-center gap-2 rounded-2xl border bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] px-3 py-1'>
                      <span className='bg-bg rounded-2xl px-2 py-0.5 text-xs text-white'>
                        {job.department}
                      </span>
                      <span className='text-xs text-gray-300'>{job.location}</span>
                    </div>
                  </div>
                  {job.isFeatured && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className='border-stroke-2 bg-bg rounded-full border p-3'
                    >
                      <svg
                        className='h-[18px] w-[18px]'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5 12H19'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M12 5L19 12L12 19'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='border-stroke-2 mx-auto rounded-full border px-6 py-3 text-base font-semibold tracking-tight text-white'
          >
            Show more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSection;
