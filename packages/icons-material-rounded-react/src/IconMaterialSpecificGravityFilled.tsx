import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpecificGravityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravityFilled'

      short_name='SpecificGravity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-31 0-54-20t-26-51l-75-685q-2-18 10-31t30-13h630q18 0 30 13t10 31l-75 685q-3 31-26 51t-54 20H280Zm-53-560h147q21-19 48-29.5t58-10.5q31 0 58 10.5t48 29.5h147l17-160H209l18 160Zm253 200q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityFilled.displayName = 'OnesyIconMaterialSpecificGravityFilled';

export default IconMaterialSpecificGravityFilled;
