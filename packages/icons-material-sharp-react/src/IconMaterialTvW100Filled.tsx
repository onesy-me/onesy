import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvW100Filled'

      short_name='Tv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-172v-80H132v-536h696v536H588v80H372Z"/>
    </Icon>
  );
});

IconMaterialTvW100Filled.displayName = 'OnesyIconMaterialTvW100Filled';

export default IconMaterialTvW100Filled;
