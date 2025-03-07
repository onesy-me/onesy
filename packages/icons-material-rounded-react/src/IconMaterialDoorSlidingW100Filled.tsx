import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSlidingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingW100Filled'

      short_name='DoorSliding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M398-452q11 0 19.5-8.5T426-480q0-11-8.5-19.5T398-508q-11 0-19.5 8.5T370-480q0 11 8.5 19.5T398-452Zm164 0q11 0 19.5-8.5T590-480q0-11-8.5-19.5T562-508q-11 0-19.5 8.5T534-480q0 11 8.5 19.5T562-452ZM212-172q-5.95 0-9.98-4.11-4.02-4.1-4.02-10.18 0-5.71 4-9.71 4-4 10-4h26v-528q0-24.75 17.63-42.38Q273.25-788 298-788h168v588h28v-588h167.83q25.17 0 42.67 17.62Q722-752.75 722-728v528h26q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H212Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100Filled.displayName = 'OnesyIconMaterialDoorSlidingW100Filled';

export default IconMaterialDoorSlidingW100Filled;
