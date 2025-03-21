import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPointScan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScan'

      short_name='PointScan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm-40-280v-120q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v120q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680Zm0 520v-120q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v120q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Zm240-360h120q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H680q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520Zm-520 0h120q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520Z"/>
    </Icon>
  );
});

IconMaterialPointScan.displayName = 'OnesyIconMaterialPointScan';

export default IconMaterialPointScan;
