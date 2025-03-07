import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffFilled'

      short_name='AccountCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q43 0 84-11.5t78-33.5L487-360h-7q-54 0-106 14t-99 41.78q-17 9.93-18.5 29.77-1.5 19.85 12.5 33.74 44 37.71 98 59.21T480-160ZM791-57l-90-89q-49 32-105 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 16.5-115T145-701l-90-91q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Zm12-235q-10 0-19-3.5T767-307L604-470q-8-8-8.5-18.5T601-509q10-16 14.5-34t4.5-37q0-58-41-99t-99-41q-19 0-37 5t-34 14q-10 5-20.5 5t-18.5-8l-63-63q-8-8-11.5-17t-3.5-19q0-14 6.5-25.5T319-846q38-17 78.5-25.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 42-8.5 82.5T846-319q-6 14-17.5 20.5T803-292Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffFilled.displayName = 'OnesyIconMaterialAccountCircleOffFilled';

export default IconMaterialAccountCircleOffFilled;
