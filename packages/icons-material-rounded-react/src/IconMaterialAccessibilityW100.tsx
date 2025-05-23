import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibilityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityW100'

      short_name='Accessibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-732q-26.4 0-45.2-18.8Q416-769.6 416-796q0-26.4 18.8-45.2Q453.6-860 480-860q26.4 0 45.2 18.8Q544-822.4 544-796q0 26.4-18.8 45.2Q506.4-732 480-732Zm-78 612v-510H184q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h592q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H558v510q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-200H430v200q0 6-4.04 10-4.03 4-10 4-5.96 0-9.96-4.03-4-4.02-4-9.97Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityW100.displayName = 'OnesyIconMaterialAccessibilityW100';

export default IconMaterialAccessibilityW100;
