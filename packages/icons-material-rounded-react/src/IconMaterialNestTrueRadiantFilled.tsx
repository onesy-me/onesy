import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestTrueRadiantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestTrueRadiantFilled'

      short_name='NestTrueRadiant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-50 0-85-35t-35-85v-360q0-17 11.5-28.5T160-640q17 0 28.5 11.5T200-600v360q0 17 11.5 28.5T240-200q17 0 28.5-11.5T280-240v-480q0-50 35-85t85-35q50 0 85 35t35 85v480q0 17 11.5 28.5T560-200q17 0 28.5-11.5T600-240v-480q0-50 35-85t85-35q50 0 85 35t35 85v360q0 17-11.5 28.5T800-320q-17 0-28.5-11.5T760-360v-360q0-17-11.5-28.5T720-760q-17 0-28.5 11.5T680-720v480q0 50-35 85t-85 35q-50 0-85-35t-35-85v-480q0-17-11.5-28.5T400-760q-17 0-28.5 11.5T360-720v480q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialNestTrueRadiantFilled.displayName = 'OnesyIconMaterialNestTrueRadiantFilled';

export default IconMaterialNestTrueRadiantFilled;
