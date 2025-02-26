import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery90 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery90'

      short_name='Battery90'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery90.displayName = 'OnesyIconMaterialBattery90';

export default IconMaterialBattery90;
