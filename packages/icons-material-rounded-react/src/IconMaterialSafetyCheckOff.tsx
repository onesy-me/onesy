import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckOff'

      short_name='SafetyCheckOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-406q7-17 10.5-35.5T680-480q0-83-58.5-141.5T480-680q-20 0-38 3.5T407-666l259 260Zm88 88-60-62q12-32 19-66.5t7-69.5v-189l-240-90-146 55-62-62 180-67q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 51-11.5 101T754-318ZM480-84q-4 0-25-4-135-45-215-166.5T160-516v-172l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L662-186q-33 35-72.5 59T505-88q-6 2-12 3t-13 1Zm34-476Zm-91 135Zm57 261q35-11 67-31t59-47l-52-52q-17 7-35.5 10.5T480-280q-83 0-141.5-58.5T280-480q0-20 3.5-38.5T294-554l-54-54v92q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOff.displayName = 'OnesyIconMaterialSafetyCheckOff';

export default IconMaterialSafetyCheckOff;
