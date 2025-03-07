import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHome'

      short_name='LocationHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-804 240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16Zm-48 444q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 200q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10ZM240-560v320q52-39 113-59.5T480-320q66 0 127 20.5T720-240v-320L480-740 240-560Zm240 80Z"/>
    </Icon>
  );
});

IconMaterialLocationHome.displayName = 'OnesyIconMaterialLocationHome';

export default IconMaterialLocationHome;
