import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpen'

      short_name='MenuOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0,0h24v24H0V0z" fill="none"/><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"/>
    </Icon>
  );
});

IconMaterialMenuOpen.displayName = 'OnesyIconMaterialMenuOpen';

export default IconMaterialMenuOpen;
