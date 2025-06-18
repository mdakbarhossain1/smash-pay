'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  categoryColor: string;
  categoryBg: string;
}

const CryptoBlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      category: 'Web3',
      title: 'Why Choose Web3 Solutions?',
      categoryColor: 'text-[#50F8E4]',
      categoryBg: 'bg-[rgba(80,248,228,0.1)]'
    },
    {
      id: '2',
      category: 'Blockchain',
      title: 'How Blockchain Enhances Security',
      categoryColor: 'text-[#55C0E5]',
      categoryBg: 'bg-[rgba(85,192,229,0.1)]'
    },
    {
      id: '3',
      category: 'Content Creation',
      title: 'Creating Engaging Web3 Content',
      categoryColor: 'text-[#FFA216]',
      categoryBg: 'bg-[rgba(255,162,22,0.1)]'
    }
  ];

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
    <section className='px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mb-12 flex flex-col items-start'
        >
          <div className='flex w-full flex-row items-start justify-between'>
            <div className='flex flex-col items-start'>
              <div className='mb-6'>
                <div className='rounded-lg border border-[rgba(191,162,246,0.2)] bg-[rgba(191,162,246,0.1)] px-4 py-2 backdrop-blur-md'>
                  <p className='bg-gradient-to-r from-[#BFA2F6] to-[#50F8E4] bg-clip-text text-transparent'>
                    BLOG SECTION
                  </p>
                </div>
              </div>
              <h2 className='mb-4 text-center text-3xl font-bold text-white md:text-4xl'>
                Read our fresh content
              </h2>
              <p className='max-w-2xl text-center text-lg text-gray-400'>
                Stay updated with our most recent blog posts and industry insights.
              </p>
            </div>
            <Link
              href='/blog'
              className='mt-6 rounded-xl border border-[#525866] px-6 py-3 text-white transition-colors duration-300 hover:bg-black'
            >
              See All
            </Link>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-3'
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className='overflow-hidden rounded-2xl border border-[#31353F] bg-gradient-to-br from-[#31353F] to-[#0A0D14] text-start shadow-lg'
            >
              <div className='flex h-full flex-col p-6'>
                {/* Category Badge */}
                <div className={`${post.categoryBg} ${post.categoryColor} mb-4 w-fit rounded-lg px-4 py-2`}>
                  <p>{post.category}</p>
                </div>

                {/* Title */}
                <h3 className='mb-6 text-2xl font-semibold text-white'>{post.title}</h3>

                {/* Read More Link */}
                <div className='group mt-auto flex items-center justify-between'>
                  <Link
                    href={`/blog`}
                    className='text-lg text-[#7C8792] transition-colors duration-300 group-hover:text-white'
                  >
                    Discover More
                  </Link>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 256 256'
                    className='ml-2 h-10 w-10 fill-[#7C8792] transition-colors duration-300 group-hover:fill-white'
                  >
                    <path d='M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoBlogSection;
