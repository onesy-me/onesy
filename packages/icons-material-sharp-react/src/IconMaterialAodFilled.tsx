import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodFilled'

      short_name='Aod'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-380v-60h240v60H360Zm-40-120v-60h320v60H320ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialAodFilled.displayName = 'OnesyIconMaterialAodFilled';

export default IconMaterialAodFilled;
