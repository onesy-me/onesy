import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotKeyboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotKeyboardW100'

      short_name='ScreenshotKeyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.81-374Q436-374 405-405.19q-31-31.2-31-75Q374-524 405.19-555q31.2-31 75-31Q524-586 555-554.81q31 31.2 31 75Q586-436 554.81-405q-31.2 31-75 31Zm.19 28q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardW100.displayName = 'OnesyIconMaterialScreenshotKeyboardW100';

export default IconMaterialScreenshotKeyboardW100;
