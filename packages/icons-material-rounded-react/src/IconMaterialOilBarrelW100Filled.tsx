import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOilBarrelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrelW100Filled'

      short_name='OilBarrel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h51v-266h-51q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h51v-266h-51q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h589q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-50v266h50q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-50v266h50q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H185Zm294.88-181q39.12 0 66.62-26.9Q574-406.8 574-445q0-15-3.5-27T556-498l-52.58-62.86Q494-572 480.03-572T457-561l-53 63q-11 14-14.5 25.39-3.5 11.4-3.5 27.11 0 38.5 27.38 65.5t66.5 27Z"/>
    </Icon>
  );
});

IconMaterialOilBarrelW100Filled.displayName = 'OnesyIconMaterialOilBarrelW100Filled';

export default IconMaterialOilBarrelW100Filled;
