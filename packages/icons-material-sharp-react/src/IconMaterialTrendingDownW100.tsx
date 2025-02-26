import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownW100'

      short_name='TrendingDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-287v-28h142L531-562 371-402 132-643l20-20 219 219 160-160 269 269v-140h28v188H640Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownW100.displayName = 'OnesyIconMaterialTrendingDownW100';

export default IconMaterialTrendingDownW100;
