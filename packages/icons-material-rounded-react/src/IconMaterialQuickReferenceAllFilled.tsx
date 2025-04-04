import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllFilled'

      short_name='QuickReferenceAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM892-68q-11 11-28 11t-28-11l-80-80q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T812-204l80 80q11 11 11 28t-11 28ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v18q0 18-14.5 29t-32.5 6q-13-3-26-4.5t-27-1.5q-56 0-104.5 21T472-480H320q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400h100q-8 19-12.5 39t-6.5 41h-81q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240h87q7 31 21 58.5t34 50.5q14 15 6.5 33T443-80H200Zm280-720v160q0 17 11.5 28.5T520-600h160L480-800l200 200-200-200Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllFilled.displayName = 'OnesyIconMaterialQuickReferenceAllFilled';

export default IconMaterialQuickReferenceAllFilled;
