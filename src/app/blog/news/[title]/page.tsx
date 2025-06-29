'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

const blogSingle = () => {
  const { title } = useParams();
  const [item, setItem] = useState<RssFeedItem>();

  useEffect(() => {
    fetch('/api/rss')
      .then((res) => res.json())
      .then((data: RssFeedItem[]) =>
        setItem(data.find((item) => new URL(item.guid).pathname === `/news/${title}`))
      );
  }, []);

  if (!item) return <p>Loading...</p>;

  return (
    <div className='bg-gradient w-full py-16'>
      <div className='mx-auto max-w-6xl px-3'>
        {/* Back button */}
        <div
          className='mb-10 flex cursor-pointer items-center justify-start gap-2 text-start text-white'
          onClick={() => window.history.back()}
        >
          <motion.div
            className='flex w-full items-center justify-start gap-2'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button className='flex cursor-pointer items-center justify-center rounded-[42px] border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-900 p-3 text-white transition-all hover:from-gray-800 hover:to-gray-800'>
              <Image src='/arrow-left0.svg' alt='Back' width={18} height={18} className='h-[18px] w-[18px]' />
            </button>
            <p className='text-xl'>Blog</p>
          </motion.div>
        </div>
        <div className='relative mb-3 h-80 w-full overflow-hidden rounded-2xl'>
          <Image src={item.enclosure.url} alt={item.title} fill className='object-cover' />
        </div>
        <h1 className='text-3xl font-bold text-white'>{item.title}</h1>
        {/* <p className='text-2xl text-white'>{item.contentSnippet}</p> */}

        <div className='my-5 flex flex-wrap items-center gap-3'>
          {item.categories &&
            item.categories?.length > 0 &&
            item.categories.map((cat, idx) => (
              <div
                key={idx}
                className='bg-bg border-stroke-2 inline-flex items-center justify-start gap-2 rounded-2xl border p-1'
              >
                <span className='rounded-2xl px-3 py-0.5 text-xs font-medium tracking-[-0.15px] text-white'>
                  {cat}
                </span>
              </div>
            ))}
        </div>
        <div className='prose text-white' dangerouslySetInnerHTML={{ __html: item['content'] }} />
        <p className='mt-8 text-xs text-gray-400'>
          Originally published by{' '}
          <a href={item.link} target='_blank'>
            Cointelegraph
          </a>
        </p>
        <p className='mb-4 text-sm text-gray-500'>{new Date(item.pubDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default blogSingle;
