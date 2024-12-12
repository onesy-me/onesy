import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermScanWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiFilled'

      short_name='PermScanWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L480-120Zm-40-240h80v-200h-80v200Zm40-240q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiFilled.displayName = 'OnesyIconMaterialPermScanWifiFilled';

export default IconMaterialPermScanWifiFilled;
