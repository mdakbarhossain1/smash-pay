import { cn } from '@/shared/utils/cn.utils';

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return <h1 className={cn(className, 'whitespace-pre-line')}>{text}</h1>;
};

export default Heading;
