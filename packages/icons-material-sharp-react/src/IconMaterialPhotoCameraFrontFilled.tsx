import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontFilled'

      short_name='PhotoCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm240-160h320v-22q0-45-44-71.5T480-400q-72 0-116 26.5T320-302v22Zm160-160q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontFilled.displayName = 'OnesyIconMaterialPhotoCameraFrontFilled';

export default IconMaterialPhotoCameraFrontFilled;
