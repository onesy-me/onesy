import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampW100Filled'

      short_name='FloorLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M467-200v-320H257l80-256h288l80 256H495v320h-28Zm-120 68v-28h268v28H347Z"/>
    </Icon>
  );
});

IconMaterialFloorLampW100Filled.displayName = 'OnesyIconMaterialFloorLampW100Filled';

export default IconMaterialFloorLampW100Filled;
