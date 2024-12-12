import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddW100Filled'

      short_name='SignalCellularAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M746-132v-120H626v-28h120v-120h28v120h120v28H774v120h-28Zm-614 0 696-696v337q-12-4-33.5-7t-34.5-3q-97.84 0-166.42 68.58Q525-363.84 525-266q0 35 11 70t31 64H132Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddW100Filled.displayName = 'OnesyIconMaterialSignalCellularAddW100Filled';

export default IconMaterialSignalCellularAddW100Filled;
