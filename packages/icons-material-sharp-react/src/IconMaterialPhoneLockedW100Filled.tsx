import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedW100Filled'

      short_name='PhoneLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-544v-176h40v-40q0-29 19.5-48.5T680-828q29 0 48.5 19.5T748-760v40h40v176H572Zm68-176h80v-40q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760v40Zm119 548q-103 0-207.5-48.5T358.5-358Q270-447 221-552.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedW100Filled.displayName = 'OnesyIconMaterialPhoneLockedW100Filled';

export default IconMaterialPhoneLockedW100Filled;
