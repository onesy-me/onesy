import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdUnits = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnits'

      short_name='AdUnits'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-600q-17 0-28.5-11.5T320-640q0-17 11.5-28.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H360ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialAdUnits.displayName = 'OnesyIconMaterialAdUnits';

export default IconMaterialAdUnits;
