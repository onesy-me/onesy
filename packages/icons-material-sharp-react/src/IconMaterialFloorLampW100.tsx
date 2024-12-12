import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampW100'

      short_name='FloorLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M467-200v-320H257l80-256h288l80 256H495v320h-28ZM295-548h372l-62-200H357l-62 200Zm52 416v-28h268v28H347Zm134-516Z"/>
    </Icon>
  );
});

IconMaterialFloorLampW100.displayName = 'OnesyIconMaterialFloorLampW100';

export default IconMaterialFloorLampW100;
