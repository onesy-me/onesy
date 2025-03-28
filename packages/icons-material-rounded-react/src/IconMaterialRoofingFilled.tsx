import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoofingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingFilled'

      short_name='Roofing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160q-33 0-56.5-23.5T360-240v-80q0-33 23.5-56.5T440-400h80q33 0 56.5 23.5T600-320v80q0 33-23.5 56.5T520-160h-80ZM120-464q-14 10-30 8t-26-16q-10-14-7.5-30T72-528l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l111 85v-22q0-25 17.5-42.5T700-800q25 0 42.5 17.5T760-740v114l129 98q13 10 15 26t-8 30q-10 14-26 16t-30-8L480-739 120-464Z"/>
    </Icon>
  );
});

IconMaterialRoofingFilled.displayName = 'OnesyIconMaterialRoofingFilled';

export default IconMaterialRoofingFilled;
