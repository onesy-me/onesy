import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbW100'

      short_name='Usb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-126q-23 0-38.5-15.5T426-180q0-18 11-32.5t29-19.5v-114H346q-26 0-43-17t-17-43v-82q-17-5-28.5-18.5T246-540q0-23 15.5-38.5T300-594q23 0 38.5 15.5T354-540q0 20-11.5 33.5T314-488v82q0 12 10 22t22 10h120v-332h-24q-9 0-13-8t1-16l38-50q5-6 12-6t12 6l38 50q5 8 1 16t-13 8h-24v332h120q12 0 22-10t10-22v-80h-25q-6 0-10.5-4.5T606-501v-78q0-6 4.5-10.5T621-594h78q6 0 10.5 4.5T714-579v78q0 6-4.5 10.5T699-486h-25v80q0 26-17 43t-43 17H494v114q18 5 29 19.5t11 32.5q0 23-15.5 38.5T480-126Z"/>
    </Icon>
  );
});

IconMaterialUsbW100.displayName = 'OnesyIconMaterialUsbW100';

export default IconMaterialUsbW100;
