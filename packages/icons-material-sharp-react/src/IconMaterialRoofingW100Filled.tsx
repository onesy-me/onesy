import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoofingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingW100Filled'

      short_name='Roofing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-212v-200h200v200H380ZM109-480l-17-22 388-286 178 131v-91h62v136l149 110-17 22-372-273-371 273Z"/>
    </Icon>
  );
});

IconMaterialRoofingW100Filled.displayName = 'OnesyIconMaterialRoofingW100Filled';

export default IconMaterialRoofingW100Filled;
