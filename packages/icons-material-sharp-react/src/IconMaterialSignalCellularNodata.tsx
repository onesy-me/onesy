import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularNodata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNodata'

      short_name='SignalCellularNodata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-100-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83ZM80-80l800-799v427q-18-11-38-17.5T800-480v-206L273-160h257q8 23 20 43t27 37H80Zm193-80 527-526q-76 76-138 137.5t-121.5 121L417-304 273-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNodata.displayName = 'OnesyIconMaterialSignalCellularNodata';

export default IconMaterialSignalCellularNodata;
