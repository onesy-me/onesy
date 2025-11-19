import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheck = (props: IIcon) => {

  return (
    <Icon
      name='Check'

      short_name='Check'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </Icon>
  );
};

IconMaterialCheck.displayName = 'OnesyIconMaterialCheck';

export default IconMaterialCheck;
