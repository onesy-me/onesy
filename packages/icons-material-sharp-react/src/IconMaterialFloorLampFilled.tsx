import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorLampFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampFilled'

      short_name='FloorLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-320H186l111-360h366l111 360H520v320h-80ZM320-80v-80h320v80H320Z"/>
    </Icon>
  );
});

IconMaterialFloorLampFilled.displayName = 'OnesyIconMaterialFloorLampFilled';

export default IconMaterialFloorLampFilled;
