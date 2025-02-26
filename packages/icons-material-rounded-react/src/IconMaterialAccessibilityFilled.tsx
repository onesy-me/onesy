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
      <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-120v-480H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H600v480q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-200h-80v200q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityFilled.displayName = 'OnesyIconMaterialAccessibilityFilled';

export default IconMaterialAccessibilityFilled;
