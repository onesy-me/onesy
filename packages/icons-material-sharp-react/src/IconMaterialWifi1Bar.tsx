import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1Bar'

      short_name='Wifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 339-262q28-28 64.5-43t76.5-15q40 0 76.5 15t64.5 43L480-120Z"/>
    </Icon>
  );
});

IconMaterialWifi1Bar.displayName = 'OnesyIconMaterialWifi1Bar';

export default IconMaterialWifi1Bar;
