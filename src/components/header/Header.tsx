'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';

type MenuItem = {
  title: string;
  href?: string;
  submenu?: MenuItem[];
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: 'Products',
      submenu: [
        { title: 'Payments', href: '#' },
        { title: 'Banking', href: '#' },
        { title: 'Cards', href: '#' }
      ]
    },
    { title: 'Pricing', href: '#' },
    {
      title: 'Company',
      submenu: [
        { title: 'About Us', href: '#' },
        { title: 'Careers', href: '#' },
        { title: 'Press', href: '#' }
      ]
    },
    {
      title: 'Resources',
      submenu: [
        { title: 'Blog', href: '#' },
        { title: 'Help Center', href: '#' },
        { title: 'API Docs', href: '#' }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div
      className='flex w-full flex-col items-center justify-start overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      {/* Header */}
      <div
        className='relative h-[82px] w-full border-b bg-[#161922]'
        style={{
          borderImage:
            'linear-gradient(90deg, rgba(158, 168, 171, 1) 0%, rgba(129, 112, 168, 1) 48.527792096138%, rgba(79, 173, 162, 1) 100%) 1'
        }}
      >
        <div className='flex h-[82px] w-full items-center justify-center'>
          <div className='flex w-full max-w-[1280px] items-center justify-between px-4 md:px-8'>
            <div className='flex items-center gap-4 md:gap-16'>
              {/* Logo */}
              <div className='relative h-7 w-[120px] md:w-[146px]'>
                <Image
                  src='/home/smash-pay-logo-1-10.png'
                  alt='Smash Pay Logo'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              {/* Desktop Menu */}
              {!isMobile && (
                <div className='flex items-center gap-4 md:gap-10'>
                  {menuItems.map((item) => (
                    <div key={item.title} className='group relative flex cursor-pointer items-center'>
                      <div className='flex items-center'>
                        <span className='text-sm font-medium text-white transition-colors group-hover:text-gray-300 md:text-base'>
                          {item.title}
                        </span>
                        {item.submenu && (
                          <FiChevronDown className='ml-1 text-white transition-colors group-hover:text-gray-300' />
                        )}
                      </div>

                      {/* Desktop Submenu */}
                      {item.submenu && (
                        <div className='pointer-events-none absolute top-full left-0 z-50 mt-2 w-48 rounded-md bg-[#161922] py-1 opacity-0 shadow-lg transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100'>
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className='block px-4 py-2 text-sm text-white hover:bg-[#0e131b]'
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='p-2 text-white'>
                {mobileMenuOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
              </button>
            )}

            {/* Desktop Auth Buttons */}
            {!isMobile && (
              <div className='flex items-center gap-2 md:gap-3'>
                <button className='rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2e38] md:text-base'>
                  Log in
                </button>
                <button
                  className='rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white md:text-base'
                  style={{
                    background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                  }}
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='w-full overflow-hidden bg-[#161922]'
            >
              <div className='px-4 py-4'>
                {menuItems.map((item) => (
                  <div key={item.title} className='mb-2'>
                    <div
                      className='flex cursor-pointer items-center justify-between px-2 py-2 text-white'
                      onClick={() => (item.submenu ? toggleSubmenu(item.title) : null)}
                    >
                      <a href={item.href} className={`font-medium ${!item.submenu ? 'block w-full' : ''}`}>
                        {item.title}
                      </a>
                      {item.submenu && (
                        <FiChevronRight
                          className={`transition-transform ${openSubmenu === item.title ? 'rotate-90' : ''}`}
                        />
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.submenu && openSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className='pl-4'
                        >
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className='block px-2 py-2 text-gray-300 hover:text-white'
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className='mt-4 border-t border-[#3c414c] pt-4'>
                  <button className='mb-2 w-full rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-base font-semibold text-white'>
                    Log in
                  </button>
                  <button
                    className='w-full rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-base font-semibold text-white'
                    style={{
                      background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
