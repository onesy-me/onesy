import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpFilled'

      short_name='HeatPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-282v-126l-89 89q20 14 42.5 23t46.5 14Zm60-1q24-4 46.5-13t42.5-23l-89-89v125Zm131-78q14-20 22.5-42.5T677-450H552l89 89Zm-89-149h125q-5-23-13.5-45.5T641-598l-89 88Zm-42-42 89-89q-20-14-42.5-23T510-678v126Zm-30 112q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm-30-112v-125q-24 4-46.5 13T361-641l89 89Zm-167 42h125l-89-88q-14 20-23 42t-13 46Zm36 149 89-89H282q5 24 14 46.5t23 42.5ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpFilled.displayName = 'OnesyIconMaterialHeatPumpFilled';

export default IconMaterialHeatPumpFilled;
