import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflinePinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinFilled'

      short_name='OfflinePin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360H360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280Zm78-232-58-58q-11-11-28-11t-28 11q-11 11-11 28t11 28l86 86q12 12 28 12t28-12l170-170q12-12 11.5-28.5T635-654q-12-11-28.5-10.5T579-653L438-512Zm42 432q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinFilled.displayName = 'OnesyIconMaterialOfflinePinFilled';

export default IconMaterialOfflinePinFilled;
