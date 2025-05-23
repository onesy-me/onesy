import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeAppLogoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAppLogoW100Filled'

      short_name='HomeAppLogo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M225.2-172q-21.2 0-36.2-14.88-15-14.87-15-36.12v-67l136-121v239h-84.8Zm116.8 0v-136h276v136H342Zm308 0v-279.48L503-581l103-91 163 144q8 8 12.5 17.78 4.5 9.78 4.5 20.83v266.13Q786-202 771.13-187q-14.88 15-36.13 15h-85ZM174-334v-154.72q0-10.99 4.5-21.13Q183-520 191-528l255-226q8-7 16.55-10 8.54-3 17.5-3 8.95 0 17.45 3t16.5 10l68 61-408 359Z"/>
    </Icon>
  );
});

IconMaterialHomeAppLogoW100Filled.displayName = 'OnesyIconMaterialHomeAppLogoW100Filled';

export default IconMaterialHomeAppLogoW100Filled;
