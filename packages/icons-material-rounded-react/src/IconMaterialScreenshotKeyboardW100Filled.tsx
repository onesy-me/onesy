import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotKeyboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotKeyboardW100Filled'

      short_name='ScreenshotKeyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-346q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardW100Filled.displayName = 'OnesyIconMaterialScreenshotKeyboardW100Filled';

export default IconMaterialScreenshotKeyboardW100Filled;
