import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvW100'

      short_name='LiveTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m406-388 206-132-206-132v264Zm-34 216v-80H132v-536h696v536H588v80H372ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLiveTvW100.displayName = 'OnesyIconMaterialLiveTvW100';

export default IconMaterialLiveTvW100;
