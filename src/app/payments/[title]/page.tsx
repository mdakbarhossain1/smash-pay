'use client';
import PaymentSingleModule from '@/modules/PaymentSingleModule';
import { useParams } from 'next/navigation';
const FaqSingle = () => {
  const params = useParams();

  return (
    <>
      <PaymentSingleModule params={params} />
    </>
  );
};

export default FaqSingle;
