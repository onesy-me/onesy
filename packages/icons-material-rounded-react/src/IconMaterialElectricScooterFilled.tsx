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
      <path d="M200-240q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T312-400h212q11-68 56.5-119T692-590l-56-250H520q-17 0-28.5-11.5T480-880q0-17 11.5-28.5T520-920h116q28 0 50 17t28 45l69 309q2 11-5 20t-18 9q-63 0-108.5 42.5T601-373q-2 23-18 38t-39 15H312q-12 35-42.5 57.5T200-240Zm560 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM520-120v48q0 11-9.5 17T491-54l-173-87q-7-4-5.5-11.5t9.5-7.5h118v-48q0-11 9.5-17t19.5-1l173 87q7 4 5.5 11.5T638-120H520Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterFilled.displayName = 'OnesyIconMaterialElectricScooterFilled';

export default IconMaterialElectricScooterFilled;
