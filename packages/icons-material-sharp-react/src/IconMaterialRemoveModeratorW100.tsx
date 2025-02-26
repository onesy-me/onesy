import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorW100'

      short_name='RemoveModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m712-348-22-22q14-32 22-71t8-75v-189l-240-89-156 58-22-22 178-66 268 100v208q0 38-8 79t-28 89Zm80 220L660-260q-35 44-82 77.5T480-134q-122-38-195-146t-73-236v-192l-80-80 20-20 660 660-20 20ZM440-480Zm67-73Zm-27 389q45-14 90.5-48.5T640-280L240-680v164q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorW100.displayName = 'OnesyIconMaterialRemoveModeratorW100';

export default IconMaterialRemoveModeratorW100;
