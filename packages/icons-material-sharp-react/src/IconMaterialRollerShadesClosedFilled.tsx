import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShadesClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosedFilled'

      short_name='RollerShadesClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H550q0 29-20.5 49.5T480-50q-29 0-49.5-20.5T410-120H80Zm160-80h200v-80H240v80Zm280 0h200v-80H520v80Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesClosedFilled.displayName = 'OnesyIconMaterialRollerShadesClosedFilled';

export default IconMaterialRollerShadesClosedFilled;
