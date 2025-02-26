import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100Filled'

      short_name='Home'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-402l268-203 268 203v402H550v-248H410v248H212Z"/>
    </Icon>
  );
});

IconMaterialHomeW100Filled.displayName = 'OnesyIconMaterialHomeW100Filled';

export default IconMaterialHomeW100Filled;
