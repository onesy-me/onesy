import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingBedsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBedsFilled'

      short_name='MovingBeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v640q0 33-23.5 56.5T520-80H160Zm0-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H160v261Zm180-61q-33 0-56.5-23.5T260-680q0-33 23.5-56.5T340-760q33 0 56.5 23.5T420-680q0 33-23.5 56.5T340-600Zm-40 320v40q0 17 11.5 28.5T340-200q17 0 28.5-11.5T380-240v-40h40q17 0 28.5-11.5T460-320q0-17-11.5-28.5T420-360h-40v-40q0-17-11.5-28.5T340-440q-17 0-28.5 11.5T300-400v40h-40q-17 0-28.5 11.5T220-320q0 17 11.5 28.5T260-280h40Zm452-88q-12-12-12-28.5t12-28.5l15-15h-87q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h87l-15-15q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l84 84q12 12 12 28t-12 28l-84 84q-12 12-28 12t-28-12Z"/>
    </Icon>
  );
});

IconMaterialMovingBedsFilled.displayName = 'OnesyIconMaterialMovingBedsFilled';

export default IconMaterialMovingBedsFilled;
