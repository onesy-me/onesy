import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMopedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMopedFilled'

      short_name='ElectricMoped'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v48q0 11-9.5 17T491-54l-173-87q-7-4-5.5-11.5t9.5-7.5h118v-48q0-11 9.5-17t19.5-1l173 87q7 4 5.5 11.5T638-120H520ZM280-280q-50 0-85-35t-35-85h-40q-17 0-28.5-11.5T80-440v-80q0-66 47-113t113-47h80q33 0 56.5 23.5T400-600v120h140l140-174v-106h-80q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h80q33 0 56.5 23.5T760-760v106q0 14-4.5 26.5T743-604L604-430q-11 14-28 22t-35 8H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-400h-80q0 17 11.5 28.5T280-360Zm80-360H240q-17 0-28.5-11.5T200-760q0-17 11.5-28.5T240-800h120q17 0 28.5 11.5T400-760q0 17-11.5 28.5T360-720Zm400 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-400q0-17-11.5-28.5T760-440q-17 0-28.5 11.5T720-400q0 17 11.5 28.5T760-360Z"/>
    </Icon>
  );
});

IconMaterialElectricMopedFilled.displayName = 'OnesyIconMaterialElectricMopedFilled';

export default IconMaterialElectricMopedFilled;
