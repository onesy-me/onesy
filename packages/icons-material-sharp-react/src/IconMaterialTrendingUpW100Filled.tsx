import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpW100Filled'

      short_name='TrendingUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m152-287-20-20 239-241 160 160 251-247H640v-28h188v188h-28v-140L531-346 371-506 152-287Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpW100Filled.displayName = 'OnesyIconMaterialTrendingUpW100Filled';

export default IconMaterialTrendingUpW100Filled;
