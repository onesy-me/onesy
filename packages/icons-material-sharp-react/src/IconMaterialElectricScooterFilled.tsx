import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricScooterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooterFilled'

      short_name='ElectricScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-240q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T312-400h212q11-68 56.5-119T692-590l-56-250H480v-80h220l90 400h-30q-66 0-113 47t-47 113v40H312q-12 35-42.5 57.5T200-240Zm560 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM520-40 280-160h160v-80l240 120H520v80Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterFilled.displayName = 'OnesyIconMaterialElectricScooterFilled';

export default IconMaterialElectricScooterFilled;
