import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletMacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacW100Filled'

      short_name='TabletMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-92v-776h616v776H172Zm28-200h560v-454H200v454Zm280 128q11 0 19.5-8.5T508-192q0-11-8.5-19.5T480-220q-11 0-19.5 8.5T452-192q0 11 8.5 19.5T480-164Z"/>
    </Icon>
  );
});

IconMaterialTabletMacW100Filled.displayName = 'OnesyIconMaterialTabletMacW100Filled';

export default IconMaterialTabletMacW100Filled;
