import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed15 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15'

      short_name='Speed15'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-17 0-28.5-11.5T280-320v-280h-40q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680h40q33 0 56.5 23.5T360-600v280q0 17-11.5 28.5T320-280Zm240 0q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h120v-80h-80q-33 0-56.5-23.5T520-520v-80q0-33 23.5-56.5T600-680h120q17 0 28.5 11.5T760-640q0 17-11.5 28.5T720-600H600v80h80q33 0 56.5 23.5T760-440v80q0 33-23.5 56.5T680-280H560Zm-120 0q-17 0-28.5-11.5T400-320q0-17 11.5-28.5T440-360q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed15.displayName = 'OnesyIconMaterialSpeed15';

export default IconMaterialSpeed15;
