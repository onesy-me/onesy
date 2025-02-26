import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGamepadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadW100Filled'

      short_name='Gamepad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-614-68-68v-146h136v146l-68 68Zm202 202-68-68 68-68h146v136H682Zm-550 0v-136h146l68 68-68 68H132Zm280 280v-146l68-68 68 68v146H412Z"/>
    </Icon>
  );
});

IconMaterialGamepadW100Filled.displayName = 'OnesyIconMaterialGamepadW100Filled';

export default IconMaterialGamepadW100Filled;
