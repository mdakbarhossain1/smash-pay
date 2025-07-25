'use client';
import { formatIsoDateToReadable } from '@/shared/utils/dateFormatter';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

type RssFeedItem = {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  isoDate: string;
  creator: string;
  'dc:creator': string;
  content: string;
  contentSnippet: string;
  categories: string[];
  enclosure: {
    url: string;
    length: string;
    type: string;
  };
};

const BlogContainer = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [items, setItems] = useState<RssFeedItem[]>([]);

  const categories = ['All'];
  // const categories = ['All', 'News', 'Personal Finance', 'Business', 'Product', 'People', 'Travel'];

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

  // const filteredPosts =
  //   activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory);

  useEffect(() => {
    fetch('/api/rss')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

            {/* <div className='flex w-full flex-row items-center justify-start gap-3 overflow-x-auto pb-2'>
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
            </div> */}
          </div>

          <div className='flex w-full flex-col items-start justify-start gap-12'>
            {/* Blog posts grid */}
            <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {paginatedItems.length > 0 &&
                paginatedItems.map((post, index) => {
                  const path = new URL(post.guid).pathname;
                  return (
                    <Link href={`/blog${path}`} key={index}>
                      <motion.article
                        className='flex flex-col gap-6'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: '-100px' }}
                      >
                        <div className='relative h-60 w-full overflow-hidden rounded-2xl'>
                          <Image src={post.enclosure.url} alt={post.title} fill className='object-cover' />
                        </div>

                        <div className='flex flex-col gap-6'>
                          <div className='flex flex-col gap-5'>
                            {/* <div className='flex items-center gap-3'>
                          {post.categories &&
                            post.categories?.length > 0 &&
                            post.categories.slice(0, 3).map((item, idx) => (
                              <div
                                key={idx}
                                className='bg-bg border-stroke-2 inline-flex items-center justify-start gap-2 rounded-2xl border p-1'
                              >
                                <span className='rounded-2xl px-3 py-0.5 text-xs font-medium tracking-[-0.15px] text-white'>
                                  {item}
                                </span>
                              </div>
                            ))}
                        </div> */}

                            <h3 className='line-clamp-2 text-xl leading-snug font-medium tracking-[-1px] text-white md:text-2xl'>
                              {post.title}
                            </h3>
                          </div>

                          <div className='flex items-center gap-4'>
                            <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                              <Image
                                src={'/blog/avatars-icon.svg'}
                                alt={post.creator}
                                fill
                                className='object-cover'
                              />
                            </div>
                            <div className='flex flex-col gap-0.5'>
                              <span className='text-base font-semibold tracking-[-0.25px] text-white'>
                                {post.creator}
                              </span>
                              <span className='text-sm tracking-[-0.25px] text-gray-300'>
                                {formatIsoDateToReadable(post.isoDate)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  );
                })}
            </div>

            {/* Pagination */}
            <motion.div
              className='flex w-full flex-col items-center justify-between gap-4 pt-5 md:flex-row'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className='border-stroke-2 flex cursor-pointer items-center justify-center gap-1.5 rounded-[44px] border bg-gradient-to-b from-[#151820] to-[#010101] px-5 py-2.5 text-base font-semibold tracking-[-0.25px] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'
              >
                <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                  <path d='M10.5 13.5L6 9L10.5 4.5' stroke='currentColor' strokeWidth='1.5' />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className='flex items-center gap-1'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-lg ${
                      page === currentPage ? 'bg-bg text-white' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='border-stroke-2 flex cursor-pointer items-center justify-center gap-1.5 rounded-[44px] border bg-gradient-to-b from-[#151820] to-[#010101] px-5 py-2.5 text-base font-semibold tracking-[-0.25px] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'
              >
                Next
                <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                  <path d='M7.5 13.5L12 9L7.5 4.5' stroke='currentColor' strokeWidth='1.5' />
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
