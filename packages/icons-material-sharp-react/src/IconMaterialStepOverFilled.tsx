import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepOverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOverFilled'

      short_name='StepOver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM163-480q14-119 104-199.5T479-760q73 0 135 29.5T720-650v-110h80v280H520v-80h168q-32-54-86.5-87T480-680q-88 0-155 57t-81 143h-81Z"/>
    </Icon>
  );
});

IconMaterialStepOverFilled.displayName = 'OnesyIconMaterialStepOverFilled';

export default IconMaterialStepOverFilled;
