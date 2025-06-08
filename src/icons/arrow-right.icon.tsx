import type { IIconProps } from './icons.interface';

const ArrowRightIcon: React.FC<IIconProps> = ({
  stroke,
  className,
  strokeWidth,
  fill,
  height,
  width,
  viewBox
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 12 12'
      fill={fill}
    >
      <path
        d='M1.33301 5.99992H10.6663M10.6663 5.99992L5.99967 1.33325M10.6663 5.99992L5.99967 10.6666'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowRightIcon;
