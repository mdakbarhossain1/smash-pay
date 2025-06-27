'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';
// Type for individual menu link
type MenuLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};

type MenuGroup = {
  groupTitle: string;
  links: MenuLink[];
};

type MenuItem = {
  title: string;
  href?: string;
  submenu?: MenuGroup[];
};

type MenuStructure = MenuItem[];

interface MegaMenuProps {
  menuStructure: MenuStructure;
}

const MegaMenu = ({ menuStructure }: MegaMenuProps) => {
  return (
    <nav className='hidden w-full items-center gap-10 text-sm font-medium md:flex'>
      {menuStructure.map((section) => (
        <div key={section.title} className='group cursor-pointer py-7'>
          <div className='flex cursor-pointer items-center gap-1'>
            <Link
              href={section.href ?? '#'}
              className='text-sm font-medium text-white transition-colors group-hover:text-gray-300 md:text-lg'
            >
              {section.title}
            </Link>
            {section.submenu && (
              <FiChevronDown className='ml-1 text-white transition-colors group-hover:text-gray-300' />
            )}
          </div>
          {/* Mega Submenu */}
          {section.submenu && (
            <div className='hadow-lg absolute top-full left-1/2 z-50 hidden w-full -translate-x-1/2 grid-cols-3 gap-8 rounded-md group-hover:grid'>
              {section.submenu && (
                <div className='absolute top-full right-0 left-0 z-50 hidden w-full bg-[#161922] pb-6 group-hover:block'>
                  <div className='mx-auto max-w-[1200px]'>
                    <div className='grid grid-cols-3 gap-8'>
                      {section.submenu.map((group) => (
                        <div key={group.groupTitle} className='min-w-[200px]'>
                          <p className='gradient-text mb-3 block pl-2 text-lg font-bold text-white'>
                            {group.groupTitle}
                          </p>
                          <div className='space-y-2'>
                            {group.links.map((link) => (
                              <Link
                                key={link.title}
                                href={link.href || '#'}
                                className='flex items-center rounded px-3 py-2 text-sm text-white transition-colors hover:bg-[#0e131b]'
                              >
                                {link.icon}
                                {link.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MegaMenu;
