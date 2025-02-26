import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMediumW100'

      short_name='DensityMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-294v-28h616v28H172Zm0-294v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialDensityMediumW100.displayName = 'OnesyIconMaterialDensityMediumW100';

export default IconMaterialDensityMediumW100;
