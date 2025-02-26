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
      <path d="M398-452q-11 0-19.5-8.5T370-480q0-11 8.5-19.5T398-508q11 0 19.5 8.5T426-480q0 11-8.5 19.5T398-452Zm164 0q-11 0-19.5-8.5T534-480q0-11 8.5-19.5T562-508q11 0 19.5 8.5T590-480q0 11-8.5 19.5T562-452ZM198-172v-28h40v-588h484v588h40v28H198Zm68-28h200v-560H266v560Zm228 0h200v-560H494v560Zm-14-294Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100.displayName = 'OnesyIconMaterialDoorSlidingW100';

export default IconMaterialDoorSlidingW100;
