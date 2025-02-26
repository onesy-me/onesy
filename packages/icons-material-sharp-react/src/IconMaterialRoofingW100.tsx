import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoofingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingW100'

      short_name='Roofing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-212v-200h200v200H380Zm28-28h144v-144H408v144ZM109-480l-17-22 388-286 178 131v-91h62v136l149 110-17 22-372-273-371 273Zm371 168Z"/>
    </Icon>
  );
});

IconMaterialRoofingW100.displayName = 'OnesyIconMaterialRoofingW100';

export default IconMaterialRoofingW100;
