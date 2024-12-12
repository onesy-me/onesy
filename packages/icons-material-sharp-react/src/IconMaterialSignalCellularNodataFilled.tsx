import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularNodataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNodataFilled'

      short_name='SignalCellularNodata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-100-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83ZM80-80l800-800v428q-27-16-58-23.5t-62-7.5q-101 0-172 71t-71 172q0 46 15 85.5T577-80H80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNodataFilled.displayName = 'OnesyIconMaterialSignalCellularNodataFilled';

export default IconMaterialSignalCellularNodataFilled;
