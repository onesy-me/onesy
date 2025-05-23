import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirPurifier = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifier'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-480q0-66 47-113t113-47h280q66 0 113 47t47 113q0 17-11.5 28.5T680-640q-16 0-28-12.5T640-680q0-33-23.5-56.5T560-760H280q-33 0-56.5 23.5T200-680v480h440v-40q0-17 11.5-28.5T680-280q17 0 28.5 11.5T720-240v40q0 33-23.5 56.5T640-120H200q-33 0-56.5-23.5T120-200Zm300-120q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm465-200q0 17-11.5 28.5T845-560q-10 0-17 4.5T816-542q-15 29-41.5 45.5T716-480q-17 0-29-11.5T675-520q0-17 12-28.5t29-11.5q9 0 16-4.5t12-13.5q15-29 42-45.5t59-16.5q17 0 28.5 11.5T885-600Zm0 160q0 17-12 28.5T844-400q-9 0-16 4.5T816-382q-15 29-41.5 45.5T716-320q-17 0-29-11.5T675-360q0-17 12-28.5t29-11.5q9 0 16-4.5t12-13.5q15-29 41.5-45.5T844-480q17 0 29 11.5t12 28.5ZM640-200H200h440-5 5Z"/>
    </Icon>
  );
});

IconMaterialAirPurifier.displayName = 'OnesyIconMaterialAirPurifier';

export default IconMaterialAirPurifier;
