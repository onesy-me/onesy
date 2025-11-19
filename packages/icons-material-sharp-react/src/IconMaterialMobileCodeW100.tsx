import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCodeW100'

      short_name='MobileCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-720 720Zm202.07-584q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-760 462-751.93t-8 20q0 11.93 8.07 19.93t20 8ZM252-92v-776h460v190h36v134h-36v111h-28v-407H280v720h136v28H252Zm371-27L516-226l107-107 19 20-87 87 87 87-19 20Zm138 0-19-20 87-87-87-87 19-20 107 107-107 107Z"/>
    </Icon>
  );
});

IconMaterialMobileCodeW100.displayName = 'OnesyIconMaterialMobileCodeW100';

export default IconMaterialMobileCodeW100;
