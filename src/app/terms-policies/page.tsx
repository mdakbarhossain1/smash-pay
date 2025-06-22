import TermsPolicyPage from '@/modules/terms-policy';
import { Suspense } from 'react';

const AboutUs = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TermsPolicyPage />
      </Suspense>
    </>
  );
};

export default AboutUs;
