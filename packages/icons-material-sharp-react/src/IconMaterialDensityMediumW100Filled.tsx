import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMediumW100Filled'

      short_name='DensityMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-294v-28h616v28H172Zm0-294v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialDensityMediumW100Filled.displayName = 'OnesyIconMaterialDensityMediumW100Filled';

export default IconMaterialDensityMediumW100Filled;
