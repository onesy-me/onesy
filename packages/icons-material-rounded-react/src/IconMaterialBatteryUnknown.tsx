import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryUnknown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknown'

      short_name='BatteryUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-354q-12 0-21.5 5.5T642-334q-6 8-15 11t-17-1q-9-4-13.5-13t.5-17q13-21 35-33.5t48-12.5q37 0 64.5 24t27.5 60q0 11-3 20.5t-9 17.5q-11 16-26 28.5T710-220q0 1-5 14-2 10-8.5 17t-16.5 7q-11 0-18-7.5t-6-17.5q1-8 2.5-14.5T664-235q10-17 25.5-29t26.5-28q3-4 7-23 0-17-13-28t-30-11Zm0 274q-14 0-24-9.5T646-113q0-14 10-24t24-10q14 0 23.5 10t9.5 24q0 14-9.5 23.5T680-80Zm-320-80Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v240q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-200H360v560h101q17 0 28.5 11.5T501-120q0 17-11.5 28.5T461-80H320Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknown.displayName = 'OnesyIconMaterialBatteryUnknown';

export default IconMaterialBatteryUnknown;
