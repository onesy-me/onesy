import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUp'

      short_name='TrendingUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/>
    </Icon>
  );
});

IconMaterialTrendingUp.displayName = 'OnesyIconMaterialTrendingUp';

export default IconMaterialTrendingUp;
