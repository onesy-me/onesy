import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrolley = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Trolley'

      short_name='Trolley'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-480H80v-80h160v480h600v80H160Zm80 200q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm40-320v-240h240v240H280Zm80-80h80v-80h-80v80Zm200 80v-240h240v240H560Zm80-80h80v-80h-80v80ZM760-80q-33 0-56.5-23.5T680-160q0-33 23.5-56.5T760-240q33 0 56.5 23.5T840-160q0 33-23.5 56.5T760-80ZM360-480h80-80Zm280 0h80-80Z"/>
    </Icon>
  );
});

IconMaterialTrolley.displayName = 'OnesyIconMaterialTrolley';

export default IconMaterialTrolley;
