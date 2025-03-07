import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAltAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAdd'

      short_name='ListAltAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160H560v-80h120v-120h80v120h120v80H760v120h-80v-120Zm-480-40v-560 560Zm-80 80v-720h720v433q-18-11-38-18t-42-11v-324H200v560h280q0 21 3 41t10 39H120Zm200-160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 160h240v-80H440v80Zm0-160h240v-80H440v80Zm0 320h54q8-23 20-43t28-37H440v80Z"/>
    </Icon>
  );
});

IconMaterialListAltAdd.displayName = 'OnesyIconMaterialListAltAdd';

export default IconMaterialListAltAdd;
