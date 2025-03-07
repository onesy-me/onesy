import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOffW100'

      short_name='UsbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-106 548-346h-54v114q18 5 29 19.5t11 32.5q0 23-15.5 38.5T480-126q-23 0-38.5-15.5T426-180q0-18 11-32.5t29-19.5v-114H346q-25 0-42.5-17.5T286-406v-82q-18-5-29-19.5T246-540q0-23 15.5-38.5T300-594L120-774l20-20 668 668-20 20ZM668-378l-22-23v-85h-40v-108h108v108h-40v80q0 8-1.5 14.5T668-378Zm-322 4h120v-54L354-540q0 18-11 32.5T314-488v82q0 14 9 23t23 9Zm148-178-28-28v-126h-54l68-90 68 90h-54v154Z"/>
    </Icon>
  );
});

IconMaterialUsbOffW100.displayName = 'OnesyIconMaterialUsbOffW100';

export default IconMaterialUsbOffW100;
