import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatelliteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteW100Filled'

      short_name='Satellite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306h332L548-442 448-318l-64-74-66 86Zm-58-222q66-11 113.5-58.5T432-700h-28q-11 55-50 94t-94 50v28Zm0-110q23-6 39.5-22.5T322-700h-62v62Zm-88 466v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialSatelliteW100Filled.displayName = 'OnesyIconMaterialSatelliteW100Filled';

export default IconMaterialSatelliteW100Filled;
