import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsActiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveW100Filled'

      short_name='NotificationsActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q75 13 124.5 71T688-568v328h60v28H212Zm268 100q-25 0-42.5-17.5T420-172h120q0 25-17.5 42.5T480-112ZM144-569q0-84 37.5-154.5T282-840l16 23q-57 42-91.5 106.5T172-569h-28Zm644 0q0-77-34.5-141.5T662-817l16-23q63 46 100.5 116.5T816-569h-28Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveW100Filled.displayName = 'OnesyIconMaterialNotificationsActiveW100Filled';

export default IconMaterialNotificationsActiveW100Filled;
