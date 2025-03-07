import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImportantDevices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevices'

      short_name='ImportantDevices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-318q0-17 11.5-28.5T680-518h160q17 0 28.5 11.5T880-478v318q0 17-11.5 28.5T840-120H680Zm0-80h160v-238H680v238Zm-320 80q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h40v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v122q0 17-11.5 28.5T760-598q-17 0-28.5-11.5T720-638v-122H160v400h360q17 0 28.5 11.5T560-320q0 17-11.5 28.5T520-280h-40v80h40q17 0 28.5 11.5T560-160q0 17-11.5 28.5T520-120H360Zm80-360 68 51q6 5 11.5 1t3.5-11l-25-85 70-56q5-5 3-11.5t-9-6.5h-86l-26-82q-2-7-10-7t-10 7l-26 82h-86q-7 0-9 6.5t3 11.5l70 56-25 85q-2 7 3.5 11t11.5-1l68-51Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialImportantDevices.displayName = 'OnesyIconMaterialImportantDevices';

export default IconMaterialImportantDevices;
