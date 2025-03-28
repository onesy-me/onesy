import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi'

      short_name='Wifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m254-346-84-86q62-62 142-95t168-33q88 0 168.5 33.5T790-430l-84 84q-45-45-103.5-69.5T480-440q-64 0-122.5 24.5T254-346ZM84-516 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-84 84q-79-79-181.5-121.5T480-680q-112 0-214.5 42.5T84-516Zm396 396L339-262q28-28 64.5-43t76.5-15q40 0 76.5 15t64.5 43L480-120Z"/>
    </Icon>
  );
});

IconMaterialWifi.displayName = 'OnesyIconMaterialWifi';

export default IconMaterialWifi;
