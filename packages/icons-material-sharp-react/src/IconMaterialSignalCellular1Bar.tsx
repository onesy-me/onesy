import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1Bar'

      short_name='SignalCellular1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Zm320-80h400v-526L400-286v126Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1Bar.displayName = 'OnesyIconMaterialSignalCellular1Bar';

export default IconMaterialSignalCellular1Bar;
