import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeIotDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeIotDeviceFilled'

      short_name='HomeIotDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M201-560h40v-140q0-9-5.5-14.5T221-720q-9 0-14.5 5.5T201-700v140Zm20 400q-75 0-127.5-52T41-340q0-48 22-86t58-62v-212q0-42 29-71t71-29q42 0 71 29t29 71v212q36 24 58 62t22 86q0 75-52.5 127.5T221-160Zm327-200q-48-33-78-85t-30-115q0-100 70-170t170-70q100 0 170 70t70 170q0 63-30 115t-78 85H548Zm132 200q-24 0-42-18t-18-42h120q0 24-18 42t-42 18Zm-120-80v-80h240v80H560Z"/>
    </Icon>
  );
});

IconMaterialHomeIotDeviceFilled.displayName = 'OnesyIconMaterialHomeIotDeviceFilled';

export default IconMaterialHomeIotDeviceFilled;
