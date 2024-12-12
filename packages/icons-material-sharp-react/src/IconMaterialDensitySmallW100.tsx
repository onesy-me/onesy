import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensitySmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmallW100'

      short_name='DensitySmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-28h616v28H172Zm0-223v-28h616v28H172Zm0-222v-28h616v28H172Zm0-223v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialDensitySmallW100.displayName = 'OnesyIconMaterialDensitySmallW100';

export default IconMaterialDensitySmallW100;
