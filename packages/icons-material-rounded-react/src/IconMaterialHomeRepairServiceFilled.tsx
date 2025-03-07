import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeRepairServiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceFilled'

      short_name='HomeRepairService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-640h240v-80H360v80ZM120-160q-17 0-28.5-11.5T80-200v-160h160q0 17 11.5 28.5T280-320q17 0 28.5-11.5T320-360h320q0 17 11.5 28.5T680-320q17 0 28.5-11.5T720-360h160v160q0 17-11.5 28.5T840-160H120ZM80-400v-160q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v160H720v-40q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440v40H320v-40q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440v40H80Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceFilled.displayName = 'OnesyIconMaterialHomeRepairServiceFilled';

export default IconMaterialHomeRepairServiceFilled;
