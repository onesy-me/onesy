import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowUp = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardArrowUp'

      short_name='KeyboardArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>
    </Icon>
  );
};

IconMaterialKeyboardArrowUp.displayName = 'OnesyIconMaterialKeyboardArrowUp';

export default IconMaterialKeyboardArrowUp;
