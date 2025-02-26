import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery60 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60'

      short_name='Battery60'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery60.displayName = 'OnesyIconMaterialBattery60';

export default IconMaterialBattery60;
