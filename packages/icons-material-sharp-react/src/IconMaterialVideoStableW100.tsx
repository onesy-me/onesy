import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableW100'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm519 0 92-348-488-132-92 345 488 135Zm-20-35L225-394l78-292 434 118-78 293Zm-499 35v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoStableW100.displayName = 'OnesyIconMaterialVideoStableW100';

export default IconMaterialVideoStableW100;
