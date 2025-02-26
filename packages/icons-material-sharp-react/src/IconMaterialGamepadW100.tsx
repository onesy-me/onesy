import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGamepadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadW100'

      short_name='Gamepad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-654Zm174 174Zm-348 0Zm174 174Zm0-308-68-68v-146h136v146l-68 68Zm202 202-68-68 68-68h146v136H682Zm-550 0v-136h146l68 68-68 68H132Zm280 280v-146l68-68 68 68v146H412Zm68-522 40-40v-106h-80v106l40 40ZM160-440h106l40-40-40-40H160v80Zm280 280h80v-106l-40-40-40 40v106Zm254-280h106v-80H694l-40 40 40 40Z"/>
    </Icon>
  );
});

IconMaterialGamepadW100.displayName = 'OnesyIconMaterialGamepadW100';

export default IconMaterialGamepadW100;
