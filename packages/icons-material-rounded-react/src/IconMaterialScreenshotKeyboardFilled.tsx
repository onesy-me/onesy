import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotKeyboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotKeyboardFilled'

      short_name='ScreenshotKeyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardFilled.displayName = 'OnesyIconMaterialScreenshotKeyboardFilled';

export default IconMaterialScreenshotKeyboardFilled;
