import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLamp'

      short_name='FloorLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-17 0-28.5-11.5T440-240v-280H240q-20 0-32-16t-6-36l78-252q8-25 29-40.5t47-15.5h248q26 0 47 15.5t29 40.5l78 252q6 20-6 36t-32 16H520v280q0 17-11.5 28.5T480-200ZM294-600h372l-62-200H356l-62 200Zm66 520q-17 0-28.5-11.5T320-120q0-17 11.5-28.5T360-160h240q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H360Zm120-620Z"/>
    </Icon>
  );
});

IconMaterialFloorLamp.displayName = 'OnesyIconMaterialFloorLamp';

export default IconMaterialFloorLamp;
