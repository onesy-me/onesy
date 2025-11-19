import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardBackspace = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardBackspace'

      short_name='KeyboardBackspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>
    </Icon>
  );
};

IconMaterialKeyboardBackspace.displayName = 'OnesyIconMaterialKeyboardBackspace';

export default IconMaterialKeyboardBackspace;
