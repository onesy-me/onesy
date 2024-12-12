import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarFilled'

      short_name='SignalCellular4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarFilled.displayName = 'OnesyIconMaterialSignalCellular4BarFilled';

export default IconMaterialSignalCellular4BarFilled;
