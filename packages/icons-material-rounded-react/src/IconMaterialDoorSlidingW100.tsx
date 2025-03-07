import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSlidingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingW100'

      short_name='DoorSliding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M398-452q-11 0-19.5-8.5T370-480q0-11 8.5-19.5T398-508q11 0 19.5 8.5T426-480q0 11-8.5 19.5T398-452Zm164 0q-11 0-19.5-8.5T534-480q0-11 8.5-19.5T562-508q11 0 19.5 8.5T590-480q0 11-8.5 19.5T562-452ZM212-172q-5.95 0-9.98-4.11-4.02-4.1-4.02-10.18 0-5.71 4-9.71 4-4 10-4h26v-528q0-26 17-43t43-17h364q26 0 43 17t17 43v528h26q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H212Zm54-28h200v-560H298q-12 0-22 10t-10 22v528Zm228 0h200v-528q0-12-10-22t-22-10H494v560Zm-14-294Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100.displayName = 'OnesyIconMaterialDoorSlidingW100';

export default IconMaterialDoorSlidingW100;
