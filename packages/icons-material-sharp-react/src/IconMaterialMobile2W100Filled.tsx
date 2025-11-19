import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobile2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mobile2W100Filled'

      short_name='Mobile2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482.07-200q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-256 462-247.93t-8 20q0 11.93 8.07 19.93t20 8ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobile2W100Filled.displayName = 'OnesyIconMaterialMobile2W100Filled';

export default IconMaterialMobile2W100Filled;
