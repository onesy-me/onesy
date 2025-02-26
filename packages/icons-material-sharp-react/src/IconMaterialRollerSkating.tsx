import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkating'

      short_name='RollerSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320v-600h360v180q0 27 16.5 49t42.5 29l221 61v281H160Zm80-80h480v-139l-164-46q-36-10-63-35.5T452-680h-92v-40h84q-2-12-2.5-20t-1.5-20h-80v-40h80v-40H240v440Zm0 0ZM200-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T240-160q0-17-11.5-28.5T200-200q-17 0-28.5 11.5T160-160q0 17 11.5 28.5T200-120Zm560 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-160q0-17-11.5-28.5T760-200q-17 0-28.5 11.5T720-160q0 17 11.5 28.5T760-120ZM480-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-160q0-17-11.5-28.5T480-200q-17 0-28.5 11.5T440-160q0 17 11.5 28.5T480-120Zm-280-40Zm280 0Zm280 0Z"/>
    </Icon>
  );
});

IconMaterialRollerSkating.displayName = 'OnesyIconMaterialRollerSkating';

export default IconMaterialRollerSkating;
