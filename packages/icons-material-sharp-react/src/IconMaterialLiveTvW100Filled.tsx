import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvW100Filled'

      short_name='LiveTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m406-388 206-132-206-132v264Zm-34 216v-80H132v-536h696v536H588v80H372Z"/>
    </Icon>
  );
});

IconMaterialLiveTvW100Filled.displayName = 'OnesyIconMaterialLiveTvW100Filled';

export default IconMaterialLiveTvW100Filled;
