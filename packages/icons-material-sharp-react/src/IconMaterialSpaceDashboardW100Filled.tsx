import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100Filled'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h294v616H172Zm322-336v-280h294v280H494Zm294 336H494v-308h294v308Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100Filled.displayName = 'OnesyIconMaterialSpaceDashboardW100Filled';

export default IconMaterialSpaceDashboardW100Filled;
