import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedMinusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedMinusW100Filled'

      short_name='ShutterSpeedMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M506-189q-8-52 5.5-100t45.5-85q32-37 76.5-59.5T732-456q-1-6-1.5-12t-1.5-12H580L418-196q24 6 46 7.5t42-.5ZM360-840v-28h240v28H360Zm112 332h251q-17-60-55.5-102.5T570-676l-98 168Zm-56 40 127-216q-64-16-121.5-1.5T320-635l96 167Zm-185 68h191L299-616q-39 42-58.5 99T231-400Zm159 195 96-167H237q14 55 55.5 100.5T390-205Zm90 73q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q63 0 113 21t95 59l52-52 20 20-52 52q36 44 57 91t23 107q-7-2-14-3l-14-2q-6-112-86.5-188.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q8 0 16.5-.5T513-162q2 7 4 13.5t5 13.5q-11 2-21 2.5t-21 .5Zm368-80H620v-28h228v28Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedMinusW100Filled.displayName = 'OnesyIconMaterialShutterSpeedMinusW100Filled';

export default IconMaterialShutterSpeedMinusW100Filled;
