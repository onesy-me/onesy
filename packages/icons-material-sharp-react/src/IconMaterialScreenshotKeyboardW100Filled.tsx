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
      <path d="M480-480Zm0 134q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardW100Filled.displayName = 'OnesyIconMaterialScreenshotKeyboardW100Filled';

export default IconMaterialScreenshotKeyboardW100Filled;
