import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopLandscapeAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeAdd'

      short_name='DesktopLandscapeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 480Zm80-120v-120q0-17 11.5-28.5T280-520h280q17 0 28.5 11.5T600-480v120q0 17-11.5 28.5T560-320H280q-17 0-28.5-11.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-200H160v480h320q17 0 28.5 11.5T520-200q0 17-11.5 28.5T480-160H160Zm500-350v-50q0-8-6-14t-14-6H390q-13 0-21.5-8.5T360-610q0-13 8.5-21.5T390-640h250q33 0 56.5 23.5T720-560v50q0 13-8.5 21.5T690-480q-13 0-21.5-8.5T660-510Zm60 310h-80q-17 0-28.5-11.5T600-240q0-17 11.5-28.5T640-280h80v-80q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v80h80q17 0 28.5 11.5T920-240q0 17-11.5 28.5T880-200h-80v80q0 17-11.5 28.5T760-80q-17 0-28.5-11.5T720-120v-80Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeAdd.displayName = 'OnesyIconMaterialDesktopLandscapeAdd';

export default IconMaterialDesktopLandscapeAdd;
