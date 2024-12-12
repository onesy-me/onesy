import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGamepadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadFilled'

      short_name='Gamepad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-540 360-660v-220h240v220L480-540Zm180 180L540-480l120-120h220v240H660Zm-580 0v-240h220l120 120-120 120H80ZM360-80v-220l120-120 120 120v220H360Z"/>
    </Icon>
  );
});

IconMaterialGamepadFilled.displayName = 'OnesyIconMaterialGamepadFilled';

export default IconMaterialGamepadFilled;
