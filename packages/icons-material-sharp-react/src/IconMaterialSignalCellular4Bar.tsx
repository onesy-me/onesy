import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4Bar'

      short_name='SignalCellular4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4Bar.displayName = 'OnesyIconMaterialSignalCellular4Bar';

export default IconMaterialSignalCellular4Bar;
