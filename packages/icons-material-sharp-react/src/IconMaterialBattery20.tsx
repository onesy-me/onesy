import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery20 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery20'

      short_name='Battery20'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery20.displayName = 'OnesyIconMaterialBattery20';

export default IconMaterialBattery20;
