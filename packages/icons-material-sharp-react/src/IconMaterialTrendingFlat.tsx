import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingFlat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlat'

      short_name='TrendingFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlat.displayName = 'OnesyIconMaterialTrendingFlat';

export default IconMaterialTrendingFlat;
