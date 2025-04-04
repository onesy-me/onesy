import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageDoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoor'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-17 0-28.5-11.5T200-160v-366l-80 61q-14 10-30 8.5T64-472q-10-14-8-30t16-26l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l359 275q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v366q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-360H280v360q0 17-11.5 28.5T240-120Zm120-40q-17 0-28.5-11.5T320-200q0-17 11.5-28.5T360-240h240q17 0 28.5 11.5T640-200q0 17-11.5 28.5T600-160H360Zm0-120q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360h240q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360Zm0-120q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480h240q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400H360Zm-63-200h366L480-739 297-600Z"/>
    </Icon>
  );
});

IconMaterialGarageDoor.displayName = 'OnesyIconMaterialGarageDoor';

export default IconMaterialGarageDoor;
