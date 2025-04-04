import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbW100Filled'

      short_name='Usb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-126q-23 0-38.5-15.5T426-180q0-18 11-32.5t29-19.5v-114H346q-26 0-43-17t-17-43v-82q-17-5-28.5-18.5T246-540q0-23 15.5-38.5T300-594q23 0 38.5 15.5T354-540q0 20-11.5 33.5T314-488v82q0 12 10 22t22 10h120v-332h-54l68-90 68 90h-54v332h120q12 0 22-10t10-22v-80h-40v-108h108v108h-40v80q0 26-17 43t-43 17H494v114q18 5 29 19.5t11 32.5q0 23-15.5 38.5T480-126Z"/>
    </Icon>
  );
});

IconMaterialUsbW100Filled.displayName = 'OnesyIconMaterialUsbW100Filled';

export default IconMaterialUsbW100Filled;
