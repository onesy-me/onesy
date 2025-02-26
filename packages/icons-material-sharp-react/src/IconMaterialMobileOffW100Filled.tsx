import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffW100Filled'

      short_name='MobileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M838-56 44-850l20-20L858-76l-20 20ZM252-662l28 28v420h401l27 27v95H252v-570Zm27-84-27-28v-94h456v530l-28-28v-380H279Z"/>
    </Icon>
  );
});

IconMaterialMobileOffW100Filled.displayName = 'OnesyIconMaterialMobileOffW100Filled';

export default IconMaterialMobileOffW100Filled;
