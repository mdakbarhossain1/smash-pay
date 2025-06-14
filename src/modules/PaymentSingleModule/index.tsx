import PaymentSingle from './components/PaymentSingle';

interface PaymentSingleModuleProps {
  params: any;
}

const PaymentSingleModule = ({ params }: PaymentSingleModuleProps) => {
  const { title } = params;
  return (
    <>
      <PaymentSingle title={title} />
    </>
  );
};

export default PaymentSingleModule;
