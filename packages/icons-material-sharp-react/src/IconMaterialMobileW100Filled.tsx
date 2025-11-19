import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileW100Filled'

      short_name='Mobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482.07-704q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-760 462-751.93t-8 20q0 11.93 8.07 19.93t20 8ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileW100Filled.displayName = 'OnesyIconMaterialMobileW100Filled';

export default IconMaterialMobileW100Filled;
