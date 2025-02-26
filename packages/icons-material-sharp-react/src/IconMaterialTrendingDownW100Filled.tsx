import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownW100Filled'

      short_name='TrendingDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-287v-28h142L531-562 371-402 132-643l20-20 219 219 160-160 269 269v-140h28v188H640Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownW100Filled.displayName = 'OnesyIconMaterialTrendingDownW100Filled';

export default IconMaterialTrendingDownW100Filled;
