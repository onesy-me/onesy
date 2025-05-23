import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed025 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed025'

      short_name='Speed025'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h120v-80H600q-17 0-28.5-11.5T560-480v-160q0-17 11.5-28.5T600-680h160q17 0 28.5 11.5T800-640q0 17-11.5 28.5T760-600H640v80h80q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600Zm-120 0H320q-17 0-28.5-11.5T280-320v-120q0-33 23.5-56.5T360-520h80v-80H320q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h120q33 0 56.5 23.5T520-600v80q0 33-23.5 56.5T440-440h-80v80h120q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-280 0q-17 0-28.5-11.5T160-320q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed025.displayName = 'OnesyIconMaterialSpeed025';

export default IconMaterialSpeed025;
