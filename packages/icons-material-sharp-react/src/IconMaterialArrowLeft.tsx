import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowLeft = (props: IIcon) => {

  return (
    <Icon
      name='ArrowLeft'

      short_name='ArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280 360-480l200-200v400Z"/>
    </Icon>
  );
};

IconMaterialArrowLeft.displayName = 'OnesyIconMaterialArrowLeft';

export default IconMaterialArrowLeft;
