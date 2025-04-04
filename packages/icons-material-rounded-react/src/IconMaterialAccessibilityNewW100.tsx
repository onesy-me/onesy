import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibilityNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewW100'

      short_name='AccessibilityNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-730q-27 0-45.5-18.5T416-794q0-27 18.5-45.5T480-858q27 0 45.5 18.5T544-794q0 27-18.5 45.5T480-730Zm-78 610v-510q-58-5-111.5-12T189-660q-7-2-11.5-7t-2.5-11q2-7 8-9.5t13-.5q71 16 140 23t144 7q75 0 144-7t140-23q7-2 13 .5t8 9.5q2 6-2.5 11t-11.5 7q-48 11-101.5 18T558-630v510q0 6-4 10t-10 4q-6 0-10-4t-4-10v-238H430v238q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewW100.displayName = 'OnesyIconMaterialAccessibilityNewW100';

export default IconMaterialAccessibilityNewW100;
