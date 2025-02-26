import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLargeW100Filled'

      short_name='DensityLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-588v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialDensityLargeW100Filled.displayName = 'OnesyIconMaterialDensityLargeW100Filled';

export default IconMaterialDensityLargeW100Filled;
