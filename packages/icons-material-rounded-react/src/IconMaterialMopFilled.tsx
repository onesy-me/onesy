import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopFilled'

      short_name='Mop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M142-120h98v-80q0-17 11.5-28.5T280-240q17 0 28.5 11.5T320-200v80h120v-80q0-17 11.5-28.5T480-240q17 0 28.5 11.5T520-200v80h120v-80q0-17 11.5-28.5T680-240q17 0 28.5 11.5T720-200v80h98l-40-160H182l-40 160Zm676 80H142q-39 0-63-31t-14-69l55-220v-80q0-33 23.5-56.5T200-520h160v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h160q33 0 56.5 23.5T840-440v80l55 220q13 38-11.5 69T818-40Z"/>
    </Icon>
  );
});

IconMaterialMopFilled.displayName = 'OnesyIconMaterialMopFilled';

export default IconMaterialMopFilled;
