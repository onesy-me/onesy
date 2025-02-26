import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarFilled'

      short_name='Wifi2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m254-346-84-86q62-62 142-95t168-33q88 0 168.5 33.5T790-430l-84 84q-45-45-103.5-69.5T480-440q-64 0-122.5 24.5T254-346Zm226 226L339-262q28-28 64.5-43t76.5-15q40 0 76.5 15t64.5 43L480-120Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarFilled.displayName = 'OnesyIconMaterialWifi2BarFilled';

export default IconMaterialWifi2BarFilled;
