import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPumpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpFilled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-600-34 50q-27 42-36.5 64.5T400-440q0 33 23.5 56.5T480-360q33 0 56.5-23.5T560-440q0-23-9.5-45.5T514-550l-34-50Zm0 370q-104 0-177-73t-73-177q0-104 73-177t177-73q104 0 177 73t73 177q0 104-73 177t-177 73Zm360-250v-40h-53q-11-80-57.5-143.5T613-760h227v-40h80v320h-80ZM40-160v-320h80v40h53q11 80 57.5 143.5T347-200H120v40H40Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpFilled.displayName = 'OnesyIconMaterialWaterPumpFilled';

export default IconMaterialWaterPumpFilled;
