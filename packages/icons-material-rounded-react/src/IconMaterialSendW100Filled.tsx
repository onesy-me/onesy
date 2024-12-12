import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendW100Filled'

      short_name='Send'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214.13-256.03Q199-250 185.5-258.43 172-266.87 172-283v-151l208-46-208-46v-151q0-16.13 13.5-24.57 13.5-8.43 28.63-2.4L680-508q18 8.38 18 28.19Q698-460 680-452L214.13-256.03Z"/>
    </Icon>
  );
});

IconMaterialSendW100Filled.displayName = 'OnesyIconMaterialSendW100Filled';

export default IconMaterialSendW100Filled;
