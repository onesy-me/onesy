import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPestControlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlFilled'

      short_name='PestControl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-64 0-114.5-33T283-240l-61 35q-14 8-30 3t-24-19q-8-14-4-30t18-24l69-40q-3-11-5-22.5t-4-22.5h-82q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h82q2-12 4-23.5t5-22.5l-69-40q-14-8-18-24t4-30q8-14 24.5-18.5T223-595l59 35q8-14 18.5-27.5T322-612q-2-7-2-14v-14q0-24 7-46t19-41l-38-38q-11-11-11.5-28t11.5-29q11-12 27.5-11.5T364-822l42 40q17-9 35.5-13.5T480-800q20 0 39 5t36 14l41-41q12-12 28-11.5t28 12.5q11 12 11.5 28T652-765l-38 38q12 19 18.5 41t6.5 46v13.5q0 6.5-2 13.5 11 11 21.5 25t18.5 28l61-35q14-8 30-3.5t24 18.5q8 14 3.5 30.5T777-525l-69 39q3 11 5.5 22.5T718-440h82q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-82q-2 12-4 23.5t-5 22.5l69 40q14 8 18 24.5t-4 30.5q-8 14-24 18t-30-4l-61-35q-32 54-82.5 87T480-120Zm-76-546q17-7 36.5-10.5T480-680q20 0 38.5 3t35.5 10q-8-23-28-38t-46-15q-26 0-47 15.5T404-666Zm76 466q73 0 116.5-61T640-400q0-70-40.5-135T480-600q-78 0-119 64.5T320-400q0 78 43.5 139T480-200Zm0-80q-17 0-28.5-11.5T440-320v-160q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480v160q0 17-11.5 28.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialPestControlFilled.displayName = 'OnesyIconMaterialPestControlFilled';

export default IconMaterialPestControlFilled;
