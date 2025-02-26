import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermContactCalendarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarW100'

      short_name='PermContactCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-278q-72 0-140 27.5T213-166v6h531v-6q-57-57-123.82-84.5Q553.37-278 480-278Zm-280 86q54-53 125.5-83.5T480-306q83 0 154.5 30.5T760-192v-528H200v528Zm280-234q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Zm0-28q35 0 60.5-25.5T566-540q0-35-25.5-60.5T480-626q-35 0-60.5 25.5T394-540q0 35 25.5 60.5T480-454ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm308-408Zm.5 380H744 213h267.5Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100.displayName = 'OnesyIconMaterialPermContactCalendarW100';

export default IconMaterialPermContactCalendarW100;
