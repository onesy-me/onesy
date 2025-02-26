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
      <path d="M546-600v-188h242v188H546ZM172-492v-296h242v296H172Zm374 320v-296h242v296H546Zm-374 0v-188h242v188H172Z"/>
    </Icon>
  );
});

IconMaterialDashboardW100Filled.displayName = 'OnesyIconMaterialDashboardW100Filled';

export default IconMaterialDashboardW100Filled;
