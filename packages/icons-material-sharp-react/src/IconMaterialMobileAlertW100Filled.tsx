import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileAlertW100Filled'

      short_name='MobileAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q8.5 0 14.25-5.75T500-328q0-8.5-5.75-14.25T480-348q-8.5 0-14.25 5.75T460-328q0 8.5 5.75 14.25T480-308Zm-14-106h28v-244h-28v244ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileAlertW100Filled.displayName = 'OnesyIconMaterialMobileAlertW100Filled';

export default IconMaterialMobileAlertW100Filled;
