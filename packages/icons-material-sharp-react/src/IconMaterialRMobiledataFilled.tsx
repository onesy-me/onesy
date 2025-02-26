import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataFilled'

      short_name='RMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-560v-320h280v208h-48l48 112h-80l-46-106h-74v106H80Zm80-186h120v-54H160v54Z"/>
    </Icon>
  );
});

IconMaterialRMobiledataFilled.displayName = 'OnesyIconMaterialRMobiledataFilled';

export default IconMaterialRMobiledataFilled;
