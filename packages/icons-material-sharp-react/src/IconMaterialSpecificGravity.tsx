import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpecificGravity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravity'

      short_name='SpecificGravity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m208-80-88-800h720L752-80H208Zm19-560h147q21-19 48-29.5t58-10.5q31 0 58 10.5t48 29.5h147l17-160H209l18 160Zm253 200q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440ZM236-560l44 400h400l44-400h-89q2 10 3.5 19.5T640-520q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-11 1.5-20.5T325-560h-89Zm44 400h45-5 320-5 45-400Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravity.displayName = 'OnesyIconMaterialSpecificGravity';

export default IconMaterialSpecificGravity;
