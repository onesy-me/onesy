import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatterySaverW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverW100'

      short_name='BatterySaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-132v-100H560v-28h100v-100h28v100h100v28H688v100h-28Zm-306-28Zm-28 28v-643h90v-53h128v53h90v305q-8 2-14.5 3.5T606-463v-285H354v588h105q3 8 6 14.5t7 13.5H326Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverW100.displayName = 'OnesyIconMaterialBatterySaverW100';

export default IconMaterialBatterySaverW100;
