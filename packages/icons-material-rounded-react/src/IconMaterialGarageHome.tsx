import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHome'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-820q13 0 25 4t23 12l240 180q15 11 23.5 28t8.5 36v400q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-400L480-740 240-560v400q0 17-11.5 28.5T200-120q-17 0-28.5-11.5T160-160v-400q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4ZM360-200h240v-80H360v80Zm0-160h240v-80H360v80Zm-40 240q-17 0-28.5-11.5T280-160v-320q0-17 11.5-28.5T320-520h320q17 0 28.5 11.5T680-480v320q0 17-11.5 28.5T640-120H320Z"/>
    </Icon>
  );
});

IconMaterialGarageHome.displayName = 'OnesyIconMaterialGarageHome';

export default IconMaterialGarageHome;
