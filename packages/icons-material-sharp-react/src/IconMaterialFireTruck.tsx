import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireTruck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireTruck'

      short_name='FireTruck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-50 0-85-35t-35-85H40v-280h440v-240h160v-80h120v80h79l81 239v281H800q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-240q0-17-11.5-28.5T280-280q-17 0-28.5 11.5T240-240q0 17 11.5 28.5T280-200Zm400 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v120h71q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h111v-120H120Zm440 120h31q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h71v-120H560v120Zm0-200h276l-54-160H560v160ZM40-560v-60h40v-80H40v-60h400v60h-40v80h40v60H40Zm100-60h70v-80h-70v80Zm130 0h70v-80h-70v80Zm210 180H120h360Zm80 0h280-280Z"/>
    </Icon>
  );
});

IconMaterialFireTruck.displayName = 'OnesyIconMaterialFireTruck';

export default IconMaterialFireTruck;
