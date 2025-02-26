import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackFilled'

      short_name='PhotoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm120-160h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackFilled.displayName = 'OnesyIconMaterialPhotoCameraBackFilled';

export default IconMaterialPhotoCameraBackFilled;
