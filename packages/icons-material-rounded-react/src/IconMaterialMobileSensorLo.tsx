import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileSensorLo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileSensorLo'

      short_name='MobileSensorLo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120q-33 0-56.5-23.5T240-200v-560q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v560q0 33-23.5 56.5T640-120H320Zm320-80v-560H320v560h320ZM480-640q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680q0 17 11.5 28.5T480-640ZM120-440v-200q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v200q0 17-11.5 28.5T160-400q-17 0-28.5-11.5T120-440Zm640 120v-200q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v200q0 17-11.5 28.5T800-280q-17 0-28.5-11.5T760-320ZM320-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialMobileSensorLo.displayName = 'OnesyIconMaterialMobileSensorLo';

export default IconMaterialMobileSensorLo;
