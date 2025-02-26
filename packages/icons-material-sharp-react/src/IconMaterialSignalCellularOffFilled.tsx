import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffFilled'

      short_name='SignalCellularOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m831-16-64-64H80l344-344L96-751l56-57L888-72l-57 56Zm49-176L536-536l344-344v688Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffFilled.displayName = 'OnesyIconMaterialSignalCellularOffFilled';

export default IconMaterialSignalCellularOffFilled;
