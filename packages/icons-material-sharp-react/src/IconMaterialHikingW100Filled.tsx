import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHikingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingW100Filled'

      short_name='Hiking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-66 116-601q3-17 16.89-27T454-704q16.16 0 29.86 7 13.71 7 22.14 21l40 64q20 32 61 61.5t99 46.5v-80h28v518h-28v-410.87Q652-488 600.5-520.5T505-607l-37 186 86 82v273h-28v-235l-130-96-73 331h-31Zm-5-400-73-14 44-227 73 18-44 223Zm233-290q-26.4 0-45.2-18.8Q456-793.6 456-820q0-26.4 18.8-45.2Q493.6-884 520-884q26.4 0 45.2 18.8Q584-846.4 584-820q0 26.4-18.8 45.2Q546.4-756 520-756Z"/>
    </Icon>
  );
});

IconMaterialHikingW100Filled.displayName = 'OnesyIconMaterialHikingW100Filled';

export default IconMaterialHikingW100Filled;
