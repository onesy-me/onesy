import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPauseW100Filled'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v426H578v270H132Zm654 0v-170h28v170h-28Zm-108 0v-170h28v170h-28Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPauseW100Filled.displayName = 'OnesyIconMaterialSignalCellularPauseW100Filled';

export default IconMaterialSignalCellularPauseW100Filled;
