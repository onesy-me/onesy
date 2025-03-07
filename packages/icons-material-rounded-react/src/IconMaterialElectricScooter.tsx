import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricScooter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooter'

      short_name='ElectricScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-240q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T312-400h212q11-68 56.5-119T692-590l-56-250H520q-17 0-28.5-11.5T480-880q0-17 11.5-28.5T520-920h116q28 0 50 17t28 45l69 309q2 11-5 20t-18 9q-63 0-108.5 42.5T601-373q-2 23-18 38t-39 15H312q-12 35-42.5 57.5T200-240Zm0-80q17 0 28.5-11.5T240-360q0-17-11.5-28.5T200-400q-17 0-28.5 11.5T160-360q0 17 11.5 28.5T200-320Zm560 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-360q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360q0 17 11.5 28.5T760-320ZM520-120v48q0 11-9.5 17T491-54l-173-87q-7-4-5.5-11.5t9.5-7.5h118v-48q0-11 9.5-17t19.5-1l173 87q7 4 5.5 11.5T638-120H520ZM200-360Zm560 0Z"/>
    </Icon>
  );
});

IconMaterialElectricScooter.displayName = 'OnesyIconMaterialElectricScooter';

export default IconMaterialElectricScooter;
