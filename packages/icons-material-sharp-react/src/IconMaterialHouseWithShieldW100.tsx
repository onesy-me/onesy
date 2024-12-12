import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseWithShieldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldW100'

      short_name='HouseWithShield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-273q51-13 84.5-58.71T598-433v-75.66L480-568l-118 59.22v75.52q0 56.26 33.5 101.76Q429-286 480-273ZM212-172v-402l268-202 268 202v402H212Zm28-28h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShieldW100.displayName = 'OnesyIconMaterialHouseWithShieldW100';

export default IconMaterialHouseWithShieldW100;
