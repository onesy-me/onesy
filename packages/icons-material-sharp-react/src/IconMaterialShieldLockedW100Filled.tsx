import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedW100Filled'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M613-132v-176h40v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h39v176H613Zm68-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40ZM480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v218q-7-1-13.55-1.5-6.55-.5-13.45-.5-84 1-142 59t-58 141v158q-9.74 5.33-19.99 9.33-10.25 4-21.01 6.67Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedW100Filled.displayName = 'OnesyIconMaterialShieldLockedW100Filled';

export default IconMaterialShieldLockedW100Filled;
