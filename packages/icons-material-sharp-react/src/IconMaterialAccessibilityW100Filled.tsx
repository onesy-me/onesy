import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityW100Filled'

      short_name='Accessibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-732q-26.4 0-45.2-18.8Q416-769.6 416-796q0-26.4 18.8-45.2Q453.6-860 480-860q26.4 0 45.2 18.8Q544-822.4 544-796q0 26.4-18.8 45.2Q506.4-732 480-732Zm-78 626v-524H170v-28h620v28H558v524h-28v-214H430v214h-28Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityW100Filled.displayName = 'OnesyIconMaterialAccessibilityW100Filled';

export default IconMaterialAccessibilityW100Filled;
