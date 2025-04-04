import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPregnancy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pregnancy'

      short_name='Pregnancy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120v-160h-40q-17 0-28.5-11.5T320-320v-240q0-50 35-85t85-35q50 0 85 35t35 85q36 15 58 48t22 72v120q0 17-11.5 28.5T600-280h-80v160q0 17-11.5 28.5T480-80h-40q-17 0-28.5-11.5T400-120Zm40-600q-33 0-56.5-23.5T360-800q0-33 23.5-56.5T440-880q33 0 56.5 23.5T520-800q0 33-23.5 56.5T440-720Z"/>
    </Icon>
  );
});

IconMaterialPregnancy.displayName = 'OnesyIconMaterialPregnancy';

export default IconMaterialPregnancy;
