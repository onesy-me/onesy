import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartPlusW100Filled'

      short_name='HeartPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-306v-120H586v-28h120v-120h28v120h120v28H734v120h-28ZM440-190l-22-20q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q69 0 116.5 45.5T788-643q-14-5-31-8t-37-3q-89 0-151.5 62T506-440q0 38 13.5 74t39.5 66q-22 20-46 42.5T462-210l-22 20Z"/>
    </Icon>
  );
});

IconMaterialHeartPlusW100Filled.displayName = 'OnesyIconMaterialHeartPlusW100Filled';

export default IconMaterialHeartPlusW100Filled;
