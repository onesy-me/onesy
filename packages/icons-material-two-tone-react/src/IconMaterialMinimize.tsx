import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinimize = (props: IIcon) => {

  return (
    <Icon
      name='Minimize'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h12v2H6v-2z"/>
    </Icon>
  );
};

IconMaterialMinimize.displayName = 'OnesyIconMaterialMinimize';

export default IconMaterialMinimize;
