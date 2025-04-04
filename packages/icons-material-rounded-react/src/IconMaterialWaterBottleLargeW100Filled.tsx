import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottleLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLargeW100Filled'

      short_name='WaterBottleLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-126q-24.75 0-42.37-17.63Q246-161.25 246-186v-68q0-24.75 17.63-42.38Q281.25-314 306-314h20v-212h-20q-24.75 0-42.37-17.63Q246-561.25 246-586v-68q0-24.75 17.63-42.38Q281.25-714 306-714h130v-60h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h140q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26v60h130q24.75 0 42.38 17.62Q714-678.75 714-654v68q0 24.75-17.62 42.37Q678.75-526 654-526h-20v212h20q24.75 0 42.38 17.62Q714-278.75 714-254v68q0 24.75-17.62 42.37Q678.75-126 654-126H306Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeW100Filled.displayName = 'OnesyIconMaterialWaterBottleLargeW100Filled';

export default IconMaterialWaterBottleLargeW100Filled;
