import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingFlatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatW100'

      short_name='TrendingFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m684-336-20-20 110-110H172v-28h602L664-604l20-20 144 144-144 144Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatW100.displayName = 'OnesyIconMaterialTrendingFlatW100';

export default IconMaterialTrendingFlatW100;
