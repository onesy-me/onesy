import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackGroupW100Filled'

      short_name='StackGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-132v-240H132v-456h456v240h240v456H372Z"/>
    </Icon>
  );
});

IconMaterialStackGroupW100Filled.displayName = 'OnesyIconMaterialStackGroupW100Filled';

export default IconMaterialStackGroupW100Filled;
