'use client';

import Image from 'next/image';

interface BalanceCardProps {
  currency: string;
  amount: string;
  accountNumber: string;
  flagSrc: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ currency, amount, accountNumber, flagSrc }) => {
  return (
    <div className='w-[200px] rounded-xl bg-[#0F1114] p-4 text-white shadow-md'>
      <div className='flex items-center space-x-3'>
        <div className='h-10 w-10 overflow-hidden rounded-full'>
          <Image src={flagSrc} alt={`${currency} flag`} width={40} height={40} />
        </div>
        <div>
          <p className='text-xs text-gray-400 uppercase'>{currency}</p>
          <p className='text-lg font-semibold'>{amount}</p>
        </div>
      </div>

      <div className='mt-3 flex items-center space-x-2 rounded-full bg-[#1A1C20] px-3 py-1 text-sm text-gray-300'>
        <span>🏦</span>
        <span className='truncate'>{accountNumber}</span>
      </div>
    </div>
  );
};

export default BalanceCard;
