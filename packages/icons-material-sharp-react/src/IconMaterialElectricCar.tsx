import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricCar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCar'

      short_name='ElectricCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360v80H120v-360l98-280h524l98 280v360H720v-80H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-540q0-25-17.5-42.5T300-600q-25 0-42.5 17.5T240-540q0 25 17.5 42.5T300-480Zm360 0q25 0 42.5-17.5T720-540q0-25-17.5-42.5T660-600q-25 0-42.5 17.5T600-540q0 25 17.5 42.5T660-480ZM520-40 280-160h160v-80l240 120H520v80ZM200-440h560v-200H200v200Z"/>
    </Icon>
  );
});

IconMaterialElectricCar.displayName = 'OnesyIconMaterialElectricCar';

export default IconMaterialElectricCar;
