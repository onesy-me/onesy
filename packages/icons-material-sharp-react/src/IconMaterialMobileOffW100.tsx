import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffW100'

      short_name='MobileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M838-56 44-850l20-20L858-76l-20 20ZM252-662l28 28v420h401l27 27v95H252v-570Zm28 476v66h400v-66H280Zm-1-560-27-28h428v-66H252v-28h456v530l-28-28v-380H279Zm201 560Zm-14-588Z"/>
    </Icon>
  );
});

IconMaterialMobileOffW100.displayName = 'OnesyIconMaterialMobileOffW100';

export default IconMaterialMobileOffW100;
