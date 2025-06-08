import type { IIconProps } from './icons.interface';

const ArrowRightGradientIcon: React.FC<IIconProps> = ({
  stroke,
  className,
  strokeWidth,
  fill,
  height,
  width,
  viewBox
}) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 15 16' fill={fill}>
      <path
        d='M1.08301 7.99992H13.9163M13.9163 7.99992L7.49967 1.58325M13.9163 7.99992L7.49967 14.4166'
        stroke='url(#paint0_linear_8221_102693)'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_8221_102693'
          x1='7.49967'
          y1='1.58325'
          x2='7.49967'
          y2='14.4166'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#7B7D81' />
          <stop offset='1' stop-color='white' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowRightGradientIcon;
