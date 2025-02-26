import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery30 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery30'

      short_name='Battery30'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery30.displayName = 'OnesyIconMaterialBattery30';

export default IconMaterialBattery30;
