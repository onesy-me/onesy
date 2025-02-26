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
      <path d="M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarFilled.displayName = 'OnesyIconMaterialSignalCellular4BarFilled';

export default IconMaterialSignalCellular4BarFilled;
