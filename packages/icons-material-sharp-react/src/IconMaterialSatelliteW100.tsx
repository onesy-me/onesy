import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatelliteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteW100'

      short_name='Satellite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306h332L548-442 448-318l-64-74-66 86Zm-58-222q66-11 113.5-58.5T432-700h-28q-11 55-50 94t-94 50v28Zm0-110q23-6 39.5-22.5T322-700h-62v62Zm-88 466v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSatelliteW100.displayName = 'OnesyIconMaterialSatelliteW100';

export default IconMaterialSatelliteW100;
