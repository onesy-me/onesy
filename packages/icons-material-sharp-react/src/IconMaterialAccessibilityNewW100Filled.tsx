import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibilityNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewW100Filled'

      short_name='AccessibilityNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-730q-27 0-45.5-18.5T416-794q0-27 18.5-45.5T480-858q27 0 45.5 18.5T544-794q0 27-18.5 45.5T480-730Zm-78 624v-524q-63-5-121-13.5T172-664l6-28q75 18 148.5 26t153.5 8q80 0 153.5-8T782-692l6 28q-51 12-109 20.5T558-630v524h-28v-252H430v252h-28Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewW100Filled.displayName = 'OnesyIconMaterialAccessibilityNewW100Filled';

export default IconMaterialAccessibilityNewW100Filled;
