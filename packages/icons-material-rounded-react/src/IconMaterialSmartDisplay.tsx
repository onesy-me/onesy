import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartDisplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplay'

      short_name='SmartDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m411-320 223-143q9-6 9-17t-9-17L411-640q-10-7-20.5-1T380-623v286q0 12 10.5 18t20.5-1ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplay.displayName = 'OnesyIconMaterialSmartDisplay';

export default IconMaterialSmartDisplay;
