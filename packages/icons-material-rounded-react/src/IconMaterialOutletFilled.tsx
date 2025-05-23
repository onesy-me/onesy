import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletFilled'

      short_name='Outlet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480q17 0 28.5-11.5T400-520v-120q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640v120q0 17 11.5 28.5T360-480Zm80 240h80q17 0 28.5-11.5T560-280v-40q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v40q0 17 11.5 28.5T440-240Zm160-240q17 0 28.5-11.5T640-520v-120q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640v120q0 17 11.5 28.5T600-480ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialOutletFilled.displayName = 'OnesyIconMaterialOutletFilled';

export default IconMaterialOutletFilled;
