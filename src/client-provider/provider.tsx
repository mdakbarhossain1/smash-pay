import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Provider;
