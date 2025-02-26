import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFront'

      short_name='DoorFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm120-80h400v-560H280v560Zm280-240q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480q0 17 11.5 28.5T560-440ZM280-760v560-560Z"/>
    </Icon>
  );
});

IconMaterialDoorFront.displayName = 'OnesyIconMaterialDoorFront';

export default IconMaterialDoorFront;
