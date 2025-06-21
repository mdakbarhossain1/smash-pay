import React from 'react';

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const SmallCard: React.FC<CardHeaderProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`} data-framer-name='Card Header Wrapper'>
      <div className='flex flex-shrink-0 flex-col justify-start' data-framer-name='Subscription Management'>
        <h4 className='text-lg font-medium text-gray-900'>{title}</h4>
      </div>
      <div className='ssr-variant'>
        <div className='flex flex-shrink-0 flex-col justify-start'>
          <p className='text-base text-gray-900'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
