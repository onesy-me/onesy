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
      <path d="M480-200q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm208-360q-32-54-86.5-87T480-680q-77 0-138 44t-87 113q-6 17-18.5 30T207-480q-18 0-29-14.5t-6-31.5q28-102 112.5-168T479-760q73 0 135 29.5T720-650v-70q0-17 11.5-28.5T760-760q17 0 28.5 11.5T800-720v200q0 17-11.5 28.5T760-480H560q-17 0-28.5-11.5T520-520q0-17 11.5-28.5T560-560h128Z"/>
    </Icon>
  );
});

IconMaterialStepOverFilled.displayName = 'OnesyIconMaterialStepOverFilled';

export default IconMaterialStepOverFilled;
