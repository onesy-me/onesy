import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddFilled'

      short_name='SignalCellularAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-80v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM80-80l799-799v425q-27-16-57.5-23.5T760-485q-102 0-173.5 71.5T515-240q0 46 15 85.5T575-80H80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddFilled.displayName = 'OnesyIconMaterialSignalCellularAddFilled';

export default IconMaterialSignalCellularAddFilled;
