import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowRight = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardArrowRight'

      short_name='KeyboardArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
    </Icon>
  );
};

IconMaterialKeyboardArrowRight.displayName = 'OnesyIconMaterialKeyboardArrowRight';

export default IconMaterialKeyboardArrowRight;
