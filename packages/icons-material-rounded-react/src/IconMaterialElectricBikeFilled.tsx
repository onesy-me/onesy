import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBikeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeFilled'

      short_name='ElectricBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280q-85 0-142.5-57.5T0-480q0-85 58.5-142.5T200-680q77 0 129.5 46T396-520h26l-72-200h-30q-17 0-28.5-11.5T280-760q0-17 11.5-28.5T320-800h120q17 0 28.5 11.5T480-760q0 17-11.5 28.5T440-720h-4l14 40h192l-58-160h-64q-17 0-28.5-11.5T480-880q0-17 11.5-28.5T520-920h64q26 0 46.5 14t29.5 38l68 186h32q83 0 141.5 58.5T960-482q0 84-58 143t-142 59q-72 0-126.5-45T564-440H396q-14 69-68 114.5T200-280Zm112-160v-80h-72q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440h72Zm196-80h56q5-23 13.5-43t22.5-37H478l30 80Zm174-52 24 68q5 16 20.5 23t31.5 1q16-6 23-21t1-31l-26-68-74 28ZM520-120v48q0 11-9.5 17T491-54l-173-87q-7-4-5.5-11.5t9.5-7.5h118v-48q0-11 9.5-17t19.5-1l173 87q7 4 5.5 11.5T638-120H520Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeFilled.displayName = 'OnesyIconMaterialElectricBikeFilled';

export default IconMaterialElectricBikeFilled;
