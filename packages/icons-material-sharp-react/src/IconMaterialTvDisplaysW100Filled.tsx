import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvDisplaysW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvDisplaysW100Filled'

      short_name='TvDisplays'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-355v-473h550v28H160v445h-28Zm335 223v-80H280v-468h589v468H681v80H467Z"/>
    </Icon>
  );
});

IconMaterialTvDisplaysW100Filled.displayName = 'OnesyIconMaterialTvDisplaysW100Filled';

export default IconMaterialTvDisplaysW100Filled;
