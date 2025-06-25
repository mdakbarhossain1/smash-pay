import Marquee from 'react-fast-marquee';

const LogosSection = () => {
  const logos = [
    'sepa.png',
    'zalo.png',
    'spe.png',
    'visa.png',
    'ris.png',
    'ovo.png',
    'kakao.png',
    'pix.png',
    'momo.png',
    'gpay.png',
    'master.png',
    'gcash.png',
    'discover.png',
    'dana.png',
    'bri.png',
    'climb.png',
    'diners.png',
    'aple.png',
    'bca.png',
    'bdo.png'
  ];

  return (
    <Marquee gradient={false} speed={50}>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`/home/logos/${logo}`}
          loading='lazy'
          alt=''
          className='img'
          style={{
            backgroundColor: '#fff8f4',
            borderRadius: '30px',
            height: ' 50px',
            boxShadow: ' 0 0 18px #00000014',
            marginRight: '20px'
          }}
        />
      ))}
    </Marquee>
  );
};

export default LogosSection;
