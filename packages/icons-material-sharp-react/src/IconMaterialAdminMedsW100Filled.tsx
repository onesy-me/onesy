import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdminMedsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsW100Filled'

      short_name='AdminMeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM347-347q21 21 50 21t50-21l73-73-100-100-73 73q-20 20-20 50t20 50Zm266-266q-21-20-50-20.5T513-613l-73 73 100 100 73-73q21-21 20.5-50T613-613ZM172-172v-616h254q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h254v616H172Zm308-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsW100Filled.displayName = 'OnesyIconMaterialAdminMedsW100Filled';

export default IconMaterialAdminMedsW100Filled;
