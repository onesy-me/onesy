import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibilityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityFilled'

      short_name='Accessibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-80v-520H120v-80h720v80H600v520h-80v-240h-80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityFilled.displayName = 'OnesyIconMaterialAccessibilityFilled';

export default IconMaterialAccessibilityFilled;
