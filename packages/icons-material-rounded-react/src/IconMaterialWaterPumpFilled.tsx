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
      <path d="M480-360q33 0 56.5-23.5T560-440q0-23-9.5-45.5T514-550l-17-25q-6-9-17-9t-17 9l-17 25q-27 42-36.5 64.5T400-440q0 33 23.5 56.5T480-360Zm0 130q-104 0-177-73t-73-177q0-104 73-177t177-73q104 0 177 73t73 177q0 104-73 177t-177 73Zm360-290h-53q-10-78-56-142t-118-98h227q0-17 11.5-28.5T880-800q17 0 28.5 11.5T920-760v240q0 17-11.5 28.5T880-480q-16 0-22.5-14.5T840-520ZM40-200v-240q0-17 11.5-28.5T80-480q17 0 28.5 11.5T120-440h53q10 78 56 142t118 98H120q0 17-11.5 28.5T80-160q-17 0-28.5-11.5T40-200Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpFilled.displayName = 'OnesyIconMaterialWaterPumpFilled';

export default IconMaterialWaterPumpFilled;
