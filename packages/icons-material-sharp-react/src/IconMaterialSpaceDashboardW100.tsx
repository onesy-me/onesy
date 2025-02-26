import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h266v-560H200v560Zm294 0h266v-280H494v280Zm0-308h266v-252H494v252Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100.displayName = 'OnesyIconMaterialSpaceDashboardW100';

export default IconMaterialSpaceDashboardW100;
