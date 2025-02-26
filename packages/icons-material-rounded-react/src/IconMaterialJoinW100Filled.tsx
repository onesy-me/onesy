import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinW100Filled'

      short_name='Join'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-252q-40 0-75.5-12.5T500-300q35-41 55.5-86.5T576-480q0-48-20.5-93.5T500-660q29-23 64.5-35.5T640-708q95 0 161.5 66.5T868-480q0 95-66.5 161.5T640-252Zm-160-66q-32-31-50-72.5T412-480q0-48 18-89.5t50-72.5q32 31 50 72.5t18 89.5q0 48-18 89.5T480-318Zm-160 66q-95 0-161.5-66.5T92-480q0-95 66.5-161.5T320-708q40 0 75.5 12.5T460-660q-35 41-55.5 86.5T384-480q0 54 20 100t55 81q-29 23-64.5 35T320-252Z"/>
    </Icon>
  );
});

IconMaterialJoinW100Filled.displayName = 'OnesyIconMaterialJoinW100Filled';

export default IconMaterialJoinW100Filled;
