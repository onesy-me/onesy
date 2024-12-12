import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvW100'

      short_name='ResetTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-172v-80H132v-536h696v174h-28v-146H160v480h640v-226H450l100 100-20 20-134-134 134-134 20 20-100 100h378v282H588v80H372Zm122-348Z"/>
    </Icon>
  );
});

IconMaterialResetTvW100.displayName = 'OnesyIconMaterialResetTvW100';

export default IconMaterialResetTvW100;
