import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRespiratoryRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateW100Filled'

      short_name='RespiratoryRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-92q-12.5 0-21.25-8.75T492-122v-120l49-126q3.36-8.85 11.01-14.42Q559.67-388 569-388h69v67l-47 46 19 19 56-55v-183h28v182l55 56 19-19-46-47v-66h67q9.09 0 16.55 5.5Q813-377 817-369l51 127v120q0 12.5-8.75 21.25T838-92h-92q-12.5 0-21.25-8.75T716-122v-128l-36-36-36 36v124q0 14.17-9.92 24.08Q624.17-92 610-92h-88ZM280-351l-68-135q-1.71-3.64-4.97-5.82T200-494h-68v-254h696v280h-54v-106H586v109h-43l-91-181q-1.67-3-5-4.5t-7-1.5q-3.97 0-7.58 1.5T427-646L280-351ZM132-212v-254h59l76 153q2 4 5 5.5t7.7 1.5q4.3 0 7.3-1t5-6l147-295 78 153q-17 9-30 23.5T466-398l-54 141v45H132Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateW100Filled.displayName = 'OnesyIconMaterialRespiratoryRateW100Filled';

export default IconMaterialRespiratoryRateW100Filled;
