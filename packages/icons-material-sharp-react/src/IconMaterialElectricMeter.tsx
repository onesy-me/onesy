import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMeter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeter'

      short_name='ElectricMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-82v-100q-106-37-173-129.5T120-522q0-75 28.5-140.5t77-114q48.5-48.5 114-77T479-882q74 0 140 28.5t115 77q49 48.5 77.5 114T840-522q0 118-67.5 209.5T600-183v101h-80v-82q-10 2-20 2h-21q-10 0-19.5-.5T440-164v82h-80Zm120-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82ZM320-600h320v-80H320v80Zm130 320 120-120-50-50 50-50-60-60-120 120 50 50-50 50 60 60Zm30-240Z"/>
    </Icon>
  );
});

IconMaterialElectricMeter.displayName = 'OnesyIconMaterialElectricMeter';

export default IconMaterialElectricMeter;
