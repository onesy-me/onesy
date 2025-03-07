import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWakeOnPressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressW100Filled'

      short_name='NestWakeOnPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-494q-11 0-19.5-8.5T772-522v-198q0-11 8.5-19.5T800-748q11 0 19.5 8.5T828-720v198q0 11-8.5 19.5T800-494ZM302-172q-6 0-11.5-2.5T280-182L131-329q-9-9-9-21t9-21l1-1q4-4 8.5-6t9.5 0l142 28v-390q0-20 14-34t34-14q20 0 34 14t14 34v212h42q4 0 7.5 1t6.5 3l122 60q29 15 41.5 46t6.5 64l-28 160q-2 10-9.5 16t-18.5 6H302Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressW100Filled.displayName = 'OnesyIconMaterialNestWakeOnPressW100Filled';

export default IconMaterialNestWakeOnPressW100Filled;
