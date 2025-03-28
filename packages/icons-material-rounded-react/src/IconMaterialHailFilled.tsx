import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailFilled'

      short_name='Hail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-160q0-17 11.5-28.5T200-320h40q17 0 28.5 11.5T280-280v160q0 17-11.5 28.5T240-80h-40q-17 0-28.5-11.5T160-120Zm200 0v-436q-42 14-58.5 49T281-431q-2 14-14 22.5t-27 8.5q-16 0-28-10t-10-25q11-113 84-179t194-66q90 0 139.5-40.5T678-842q2-17 13.5-27.5T720-880q17 0 28.5 11t9.5 27q-8 75-45.5 133.5T600-624v504q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-200h-80v200q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120Zm120-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialHailFilled.displayName = 'OnesyIconMaterialHailFilled';

export default IconMaterialHailFilled;
