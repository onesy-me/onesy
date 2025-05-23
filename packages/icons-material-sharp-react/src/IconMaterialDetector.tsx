import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetector = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Detector'

      short_name='Detector'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-88 0-168.5-33T169-249l57-57q51 51 117 78.5T481-200q72 0 137.5-27T735-305l56 56q-63 63-143 96t-168 33Zm0-160q-56 0-107-21t-91-61l56-56q29 29 65.5 43.5T480-360q40 0 76.5-14.5T622-418l56 56q-40 40-91 61t-107 21ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z"/>
    </Icon>
  );
});

IconMaterialDetector.displayName = 'OnesyIconMaterialDetector';

export default IconMaterialDetector;
