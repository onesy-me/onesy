import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAlt1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1Bar'

      short_name='SignalCellularAlt1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-240h120v240H200Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1Bar.displayName = 'OnesyIconMaterialSignalCellularAlt1Bar';

export default IconMaterialSignalCellularAlt1Bar;
