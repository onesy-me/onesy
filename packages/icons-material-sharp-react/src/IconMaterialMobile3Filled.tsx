import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobile3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mobile3Filled'

      short_name='Mobile3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160h240v-80H360v80ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobile3Filled.displayName = 'OnesyIconMaterialMobile3Filled';

export default IconMaterialMobile3Filled;
