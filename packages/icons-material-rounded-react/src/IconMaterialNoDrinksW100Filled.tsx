import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoDrinksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksW100Filled'

      short_name='NoDrinks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M554-518 392-680h270l72-80H312l-28-28h411q20 0 32.5 14.19t12.5 31.02q0 7.79-3 15.2-3 7.42-9 14.59L554-518ZM306-146q-6 0-10-4t-4-10q0-6 4-10t10-4h160v-280L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5L494-426v252h160q6 0 10 4t4 10q0 6-4 10t-10 4H306Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksW100Filled.displayName = 'OnesyIconMaterialNoDrinksW100Filled';

export default IconMaterialNoDrinksW100Filled;
