import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowLeft = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardArrowLeft'

      short_name='KeyboardArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </Icon>
  );
};

IconMaterialKeyboardArrowLeft.displayName = 'OnesyIconMaterialKeyboardArrowLeft';

export default IconMaterialKeyboardArrowLeft;
