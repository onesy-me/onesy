import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightShelterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterFilled'

      short_name='NightShelter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Zm80-180h320v40q0 8 6 14t14 6q8 0 14-6t6-14v-140q0-33-23.5-56.5T600-480H500q-17 0-28.5 11.5T460-440v100H320v-160q0-8-6-14t-14-6q-8 0-14 6t-6 14v240q0 8 6 14t14 6q8 0 14-6t6-14v-40Zm70-60q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360Z"/>
    </Icon>
  );
});

IconMaterialNightShelterFilled.displayName = 'OnesyIconMaterialNightShelterFilled';

export default IconMaterialNightShelterFilled;
