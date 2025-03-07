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
      <path d="M280-120q-50 0-85-35t-35-85h-40q-33 0-56.5-23.5T40-320v-120q0-33 23.5-56.5T120-520h360v-160q0-33 23.5-56.5T560-760h80v-40q0-17 11.5-28.5T680-840h40q17 0 28.5 11.5T760-800v40h22q26 0 47 15t29 40l58 172q2 6 3 12.5t1 13.5v187q0 33-23.5 56.5T840-240h-40q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-240q0-17-11.5-28.5T280-280q-17 0-28.5 11.5T240-240q0 17 11.5 28.5T280-200Zm400 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v120h71q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h111v-120H120Zm440 120h31q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h71v-120H560v120Zm0-200h276l-54-160H560v160ZM80-620v-80H70q-13 0-21.5-8.5T40-730q0-13 8.5-21.5T70-760h340q13 0 21.5 8.5T440-730q0 13-8.5 21.5T410-700h-10v80h10q13 0 21.5 8.5T440-590q0 13-8.5 21.5T410-560H70q-13 0-21.5-8.5T40-590q0-13 8.5-21.5T70-620h10Zm60 0h70v-80h-70v80Zm130 0h70v-80h-70v80ZM120-440h360-360Zm440 0h280-280Z"/>
    </Icon>
  );
});

IconMaterialFireTruck.displayName = 'OnesyIconMaterialFireTruck';

export default IconMaterialFireTruck;
