import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInactiveOrderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InactiveOrderW100'

      short_name='InactiveOrder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-173h28v-122h-28v122Zm80 0h28v-122h-28v122ZM280-614h400v-28H280v28ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Zm-548-58v-644h616v289q-7-2-13.5-3.5T760-505v-255H200v562h257q2 12 4.5 24t7.5 23l-41-25-52 32-52-32-52 32-52-32-48 32Zm108-174h184q2-8 4.5-14.5T474-346H280v28Zm0-148h295q14-9 28-16t30-12H280v28Zm-80 268v-562 562Z"/>
    </Icon>
  );
});

IconMaterialInactiveOrderW100.displayName = 'OnesyIconMaterialInactiveOrderW100';

export default IconMaterialInactiveOrderW100;
