import Header from '@/components/header/Header';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Provider;
