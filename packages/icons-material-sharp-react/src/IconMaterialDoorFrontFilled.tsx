import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontFilled'

      short_name='DoorFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120h720v-80h-80v-640H200v640h-80v80Zm440-320q-17 0-28.5-11.5T520-480q0-17 11.5-28.5T560-520q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontFilled.displayName = 'OnesyIconMaterialDoorFrontFilled';

export default IconMaterialDoorFrontFilled;
