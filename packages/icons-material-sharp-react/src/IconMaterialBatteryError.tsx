import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryError'

      short_name='BatteryError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v348q-22 6-42 15.5T600-414v-306H360v560h148q5 22 14.5 42T545-80H280Zm80-80Zm296 80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialBatteryError.displayName = 'OnesyIconMaterialBatteryError';

export default IconMaterialBatteryError;
