'use client';

import { EButtonType, EButtonVarient } from '@/shared/enum/button.enum';
import { cn } from '@/shared/utils/cn.utils';

interface IButtonProps {
  buttonName: string;
  buttonType: EButtonType;
  varient?: EButtonVarient;
  className?: string;
  isIcon?: boolean;
  icon?: React.ReactElement;
}

const Button: React.FC<IButtonProps> = ({ buttonName, buttonType, varient, className, isIcon, icon }) => {
  const styles = {
    [EButtonVarient.OUTLINE]: `border-clr-4c text-white bg-transparent cursor-pointer`,
    [EButtonVarient.SOLID]: `button-gradient-bg text-white border-clr-4c cursor-pointer `
  };

  return (
    <>
      {isIcon ? (
        <>
          <button type={buttonType} className={cn(styles[varient || EButtonVarient.OUTLINE], className)}>
            {buttonName}
            <span>{icon}</span>
          </button>
        </>
      ) : (
        <button type={buttonType} className={cn(styles[varient || EButtonVarient.OUTLINE], className)}>
          {buttonName}
        </button>
      )}
    </>
  );
};

export default Button;
