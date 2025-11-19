import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileAlertFilled'

      short_name='MobileAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobileAlertFilled.displayName = 'OnesyIconMaterialMobileAlertFilled';

export default IconMaterialMobileAlertFilled;
