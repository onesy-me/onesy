import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackFilled'

      short_name='DoorBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm240-320q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Z"/>
    </Icon>
  );
});

IconMaterialDoorBackFilled.displayName = 'OnesyIconMaterialDoorBackFilled';

export default IconMaterialDoorBackFilled;
