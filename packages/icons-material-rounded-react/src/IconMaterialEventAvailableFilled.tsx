import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventAvailableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableFilled'

      short_name='EventAvailable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-342 139-139q12-12 29-12t29 12q12 12 12 29t-12 29L466-254q-12 12-28 12t-28-12l-85-85q-12-12-12-29t12-29q12-12 29-12t29 12l55 55ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialEventAvailableFilled.displayName = 'OnesyIconMaterialEventAvailableFilled';

export default IconMaterialEventAvailableFilled;
