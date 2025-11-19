import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileChatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileChatW100Filled'

      short_name='MobileChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v224H426v524h98l96-96h88v124H252Zm274-171v-281h290v228H579l-53 53Zm-43.93-441q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-760 462-751.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileChatW100Filled.displayName = 'OnesyIconMaterialMobileChatW100Filled';

export default IconMaterialMobileChatW100Filled;
