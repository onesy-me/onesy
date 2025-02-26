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
      <path d="M398-452q11 0 19.5-8.5T426-480q0-11-8.5-19.5T398-508q-11 0-19.5 8.5T370-480q0 11 8.5 19.5T398-452Zm164 0q11 0 19.5-8.5T590-480q0-11-8.5-19.5T562-508q-11 0-19.5 8.5T534-480q0 11 8.5 19.5T562-452ZM198-172v-28h40v-588h228v588h28v-588h228v588h40v28H198Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100Filled.displayName = 'OnesyIconMaterialDoorSlidingW100Filled';

export default IconMaterialDoorSlidingW100Filled;
