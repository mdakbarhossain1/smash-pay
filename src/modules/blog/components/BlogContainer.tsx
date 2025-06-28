'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type BlogPost = {
  id: number;
  category: string;
  title: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  avatar: string;
  isCompany?: boolean;
};

const BlogContainer = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'News', 'Personal Finance', 'Business', 'Product', 'People', 'Travel'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'Product',
      title: 'SmashPay App is now available in Dark Mode on iOS & Android',
      readTime: '5 min read',
      date: 'Sep 27, 2023',
      author: 'Reece James',
      image: '/blog/smashPayApp.png',
      avatar: '/blog/james.png'
    },
    {
      id: 2,
      category: 'News',
      title: 'Mission Update',
      readTime: '5 min read',
      date: 'Sep 25, 2023',
      author: 'SmashPay',
      image: '/blog/paymint.png',
      avatar: '/blog/samashPay.png',
      isCompany: true
    },
    {
      id: 3,
      category: 'Personal Finance',
      title: 'Top 5 easiest bank accounts to open online (2023 List)',
      readTime: '5 min read',
      date: 'Sep 24, 2023',
      author: 'Vanessa Swanson',
      image: '/blog/dog.png',
      avatar: '/blog/vanesa.png'
    },
    {
      id: 4,
      category: 'News',
      title: 'SmashPay Reports Fourth Quarter and Full Year 2023 Results',
      readTime: '5 min read',
      date: 'Sep 1, 2023',
      author: 'SmashPay',
      image: '/blog/paymint.png',
      avatar: '/blog/samashPay.png',
      isCompany: true
    },
    {
      id: 5,
      category: 'People',
      title: "Elon Musk's story joining the SmashPay team",
      readTime: '5 min read',
      date: 'Sep 18, 2023',
      author: 'Serena West',
      image: '/blog/dog.png',
      avatar: '/blog/vanesa.png'
    },
    {
      id: 6,
      category: 'Travel',
      title: 'How to get a SIM card in Iceland? (2023 Complete Guide)',
      readTime: '5 min read',
      date: 'Sep 12, 2023',
      author: 'Eleanor Hayes',
      image: '/blog/smashPayApp.png',
      avatar: '/blog/james.png'
    },
    {
      id: 7,
      category: 'News',
      title: 'The payments fees for transfering to SEK are changing',
      readTime: '5 min read',
      date: 'Sep 8, 2023',
      author: 'Samuel Hunt',
      image: '/blog/paymint.png',
      avatar: '/blog/samashPay.png'
    },
    {
      id: 8,
      category: 'Personal Finance',
      title: 'What is SWIFT? The Banking System and Payment Network',
      readTime: '5 min read',
      date: 'Sep 4, 2023',
      author: 'Adam Grant',
      image: '/blog/dog.png',
      avatar: '/blog/vanesa.png'
    },
    {
      id: 9,
      category: 'Business',
      title: '5 Best Bank Account for Retail Business Owners',
      readTime: '5 min read',
      date: 'Sep 1, 2023',
      author: 'Britney Byers',
      image: '/blog/smashPayApp.png',
      avatar: '/blog/james.png'
    }
  ];

  const filteredPosts =
    activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className='flex w-full flex-col items-center justify-start gap-16 bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] py-32'>
      <div className='flex w-full max-w-[1280px] flex-col items-start justify-start gap-16 px-8'>
        <div className='flex w-full flex-col items-start justify-start gap-12'>
          <div className='flex w-full flex-col items-start justify-start gap-8'>
            <motion.h2
              className='gradient-text text-left text-5xl leading-tight font-medium tracking-[-2px] text-transparent md:text-6xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              The Latest
            </motion.h2>

            <div className='flex w-full flex-row items-center justify-start gap-3 overflow-x-auto pb-2'>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`border-stroke-2 flex cursor-pointer items-center justify-center rounded-[40px] border px-[18px] py-2.5 whitespace-nowrap transition-colors ${
                    activeCategory === category ? 'bg-clr-14 text-white' : 'hover:bg-gray-800'
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='gradient-text-2 text-base font-semibold tracking-[-0.25px]'>
                    {category}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className='flex w-full flex-col items-start justify-start gap-12'>
            {/* Blog posts grid */}
            <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className='flex flex-col gap-6'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className='relative h-60 w-full overflow-hidden rounded-2xl'>
                    <Image src={post.image} alt={post.title} fill className='object-cover' />
                  </div>

                  <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-5'>
                      <div className='bg-bg border-stroke-2 inline-flex w-max items-center justify-start gap-2 rounded-2xl border p-1 pr-2'>
                        <span className='bg-clr-14 rounded-2xl px-2 py-0.5 text-xs font-medium tracking-[-0.15px] text-white'>
                          {post.category}
                        </span>
                        <span className='text-xs font-medium tracking-[-0.15px] text-white'>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className='line-clamp-2 text-xl leading-snug font-medium tracking-[-1px] text-white md:text-2xl'>
                        {post.title}
                      </h3>
                    </div>

                    <div className='flex items-center gap-4'>
                      <div className='relative h-12 w-12 overflow-hidden rounded-full'>
                        {post.isCompany ? (
                          <Image src={post.avatar} alt={post.author} fill className='object-center' />
                        ) : (
                          <Image src={post.avatar} alt={post.author} fill className='object-cover' />
                        )}
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <span className='text-base font-semibold tracking-[-0.25px] text-white'>
                          {post.author}
                        </span>
                        <span className='text-sm tracking-[-0.25px] text-gray-300'>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <motion.div
              className='flex w-full flex-col items-center justify-between gap-4 pt-5 md:flex-row'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button className='flex items-center gap-1.5 text-base font-semibold tracking-[-0.25px] text-gray-300 transition-colors hover:text-white'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.5 13.5L6 9L10.5 4.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Previous
              </button>

              <div className='flex items-center gap-1'>
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-lg ${
                      page === 1 ? 'bg-bg text-white' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className='flex h-12 w-12 items-center justify-center rounded-full text-lg text-white hover:bg-gray-800'>
                  ...
                </button>
                <button className='flex h-12 w-12 items-center justify-center rounded-full text-lg text-white hover:bg-gray-800'>
                  10
                </button>
              </div>

              <button className='border-stroke-2 flex items-center justify-center gap-1.5 rounded-[44px] border bg-gradient-to-b from-[#151820] to-[#010101] px-5 py-2.5 text-base font-semibold tracking-[-0.25px] text-white transition-opacity hover:opacity-90'>
                Next
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 13.5L12 9L7.5 4.5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContainer;
