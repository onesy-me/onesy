import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColorsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOff'

      short_name='InvertColorsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-657q48 48 71 103.5T800-436q0 17-1.5 33t-4.5 31q-3 15-15 23.5t-26 8.5q-9 0-17.5-3T719-354L503-570q-11-11-17-25.5t-6-30.5v-142l-61 60q-11 11-28 10.5T363-709q-12-12-11.5-28.5T364-765l74-73q9-9 20-13.5t22-4.5q11 0 22 4.5t20 13.5l184 181ZM480-120q-133 0-226.5-91.5T160-436q0-51 16-98t48-90L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96q-42 31-91.5 45.5T480-120Zm0-80v-167L280-567q-21 32-30.5 64.5T240-436q0 100 70 168t170 68Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOff.displayName = 'OnesyIconMaterialInvertColorsOff';

export default IconMaterialInvertColorsOff;
