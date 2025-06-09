'use client';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

const regions = ['All Region', 'Europe', 'America', 'Asia', 'Africa'];

export default function CountrySearch() {
  const [selectedRegion, setSelectedRegion] = useState('All Region');
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='w-full max-w-[450px]'>
      <div className='flex items-center rounded-full border border-[#2E3241] bg-[#1B1D2A] px-4 py-2 text-white'>
        {/* Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='flex w-[95px] items-center justify-between gap-1 text-left text-sm focus:outline-none'
          >
            {selectedRegion}
            <ChevronDown className='ml-1 h-4 w-4' />
          </button>
          {dropdownOpen && (
            <div className='absolute left-0 z-10 mt-2 w-40 rounded-md border border-[#2E3241] bg-[#1B1D2A] shadow-lg'>
              {regions.map((region) => (
                <div
                  key={region}
                  onClick={() => {
                    setSelectedRegion(region);
                    setDropdownOpen(false);
                  }}
                  className='cursor-pointer px-4 py-2 text-sm hover:bg-[#2A2D3A]'
                >
                  {region}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className='mx-4 h-5 w-px bg-[#2E3241]' />

        {/* Search Input */}
        <div className='flex w-full items-center'>
          <Search className='mr-2 h-4 w-4 text-[#6B7280]' />
          <input
            type='text'
            placeholder='Search Country'
            className='w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
