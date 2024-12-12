import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermContactCalendarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarW100Filled'

      short_name='PermContactCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-192q54-53 125.5-83.5T480-306q83 0 154.5 30.5T760-192v-528H200v528Zm280-234q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100Filled.displayName = 'OnesyIconMaterialPermContactCalendarW100Filled';

export default IconMaterialPermContactCalendarW100Filled;
