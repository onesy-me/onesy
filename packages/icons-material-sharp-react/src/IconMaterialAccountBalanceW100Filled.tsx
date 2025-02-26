import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceW100Filled'

      short_name='AccountBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-280v-332h28v332h-28Zm188 0v-332h28v332h-28ZM160-172v-28h640v28H160Zm494-108v-332h28v332h-28ZM160-692v-20l320-150 320 150v20H160Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceW100Filled.displayName = 'OnesyIconMaterialAccountBalanceW100Filled';

export default IconMaterialAccountBalanceW100Filled;
