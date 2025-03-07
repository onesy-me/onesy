import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVapeFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapeFreeW100'

      short_name='VapeFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M102-838q5-5 10-5t10 5l726 726-20 20-128-128H352v-80h268L102-818q-4-4-4.5-9.5T102-838Zm210 538v80q-39-9-65.5-12t-54.5-3h-7q-11 0-18-7t-7-18q0-11 7-18t18-7h7q28 0 54.5-3t65.5-12Zm461 0h7q17 0 28.5 11.5T820-260v7l-47-47Zm-353 20q-8 0-14 6t-6 14q0 8 6 14t14 6q8 0 14-6t6-14q0-8-6-14t-14-6Zm164-418q6 0 10 4t4 10q0 6-4 10t-10 4q-30 0-52 20t-22 50q0 30 22 54t52 24h62q47 0 76.5 33.5T752-412v52h-28v-52q0-37-24.5-59.5T646-494h-67l-97-97v-9q0-43 30.5-70.5T584-698Zm48-102q44 0 72 31t28 73q0 28-11.5 48.5T690-616q51 14 90.5 56.5T820-450v90h-28v-90q0-66-46-106t-114-40q-6 0-10-4t-4-10q0-6 4-10t10-4q31 0 51.5-21.5T704-696q0-31-20.5-53.5T632-772q-6 0-10-4t-4-10q0-6 4-10t10-4Z"/>
    </Icon>
  );
});

IconMaterialVapeFreeW100.displayName = 'OnesyIconMaterialVapeFreeW100';

export default IconMaterialVapeFreeW100;
