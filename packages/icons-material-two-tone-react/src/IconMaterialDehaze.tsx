import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDehaze = (props: IIcon) => {

  return (
    <Icon
      name='Dehaze'

      short_name='Dehaze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>
    </Icon>
  );
};

IconMaterialDehaze.displayName = 'OnesyIconMaterialDehaze';

export default IconMaterialDehaze;
