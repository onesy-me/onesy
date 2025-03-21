import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHeatFilled'

      short_name='EmergencyHeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-400q0-113 67-217t184-182q22-15 45.5-1.5T440-760v52q0 34 23.5 57t57.5 23q17 0 32.5-7.5T581-657q8-10 20.5-12.5T625-664q63 45 99 115t36 149q0 88-43 160.5T604-125q17-24 26.5-52.5T640-238q0-40-15-75.5T582-377L440-516 299-377q-29 29-44 64t-15 75q0 32 9.5 60.5T276-125q-70-42-113-114.5T120-400Zm320-4 85 83q17 17 26 38t9 45q0 49-35 83.5T440-120q-50 0-85-34.5T320-238q0-23 9-44.5t26-38.5l85-83Zm400-116q-17 0-28.5-11.5T800-560q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520Zm0-120q-17 0-28.5-11.5T800-680v-120q0-17 11.5-28.5T840-840q17 0 28.5 11.5T880-800v120q0 17-11.5 28.5T840-640Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHeatFilled.displayName = 'OnesyIconMaterialEmergencyHeatFilled';

export default IconMaterialEmergencyHeatFilled;
