import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularPauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPauseW100'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v426h-28v-358L200-160h378v28H132Zm546 0v-170h28v170h-28Zm108 0v-170h28v170h-28ZM500-460Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPauseW100.displayName = 'OnesyIconMaterialSignalCellularPauseW100';

export default IconMaterialSignalCellularPauseW100;
