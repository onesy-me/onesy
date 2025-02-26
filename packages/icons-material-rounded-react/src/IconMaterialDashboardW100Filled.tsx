import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardW100Filled'

      short_name='Dashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M575.88-600q-12.88 0-21.38-8.5-8.5-8.5-8.5-21.99v-127.02q0-13.49 8.71-21.99 8.71-8.5 21.59-8.5h181.82q12.88 0 21.38 8.5 8.5 8.5 8.5 21.99v127.02q0 13.49-8.71 21.99-8.71 8.5-21.59 8.5H575.88Zm-374 108q-12.88 0-21.38-8.51-8.5-8.51-8.5-21.09v-236.82q0-12.58 8.71-21.08 8.71-8.5 21.59-8.5h181.82q12.88 0 21.38 8.51 8.5 8.51 8.5 21.09v236.82q0 12.58-8.71 21.08-8.71 8.5-21.59 8.5H201.88Zm374 320q-12.88 0-21.38-8.51-8.5-8.51-8.5-21.09v-236.82q0-12.58 8.71-21.08 8.71-8.5 21.59-8.5h181.82q12.88 0 21.38 8.51 8.5 8.51 8.5 21.09v236.82q0 12.58-8.71 21.08-8.71 8.5-21.59 8.5H575.88Zm-374 0q-12.88 0-21.38-8.5-8.5-8.5-8.5-21.99v-127.02q0-13.49 8.71-21.99 8.71-8.5 21.59-8.5h181.82q12.88 0 21.38 8.5 8.5 8.5 8.5 21.99v127.02q0 13.49-8.71 21.99-8.71 8.5-21.59 8.5H201.88Z"/>
    </Icon>
  );
});

IconMaterialDashboardW100Filled.displayName = 'OnesyIconMaterialDashboardW100Filled';

export default IconMaterialDashboardW100Filled;
