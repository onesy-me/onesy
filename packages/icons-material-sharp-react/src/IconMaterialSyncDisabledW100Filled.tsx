import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabledW100Filled'

      short_name='SyncDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M772-112 645-239q-14 10-28.5 18T586-206v-30q11-5 20.5-10.5T626-258L259-625q-22 32-33.5 70T214-476q0 50 19 97t59 87l50 50v-128h28v176H194v-28h128l-50-50q-45-45-65.5-97.5T186-476q0-47 13.5-89.5T239-645L112-772l20-20 660 660-20 20Zm-50-204-20-20q21-32 32.5-69.5T746-484q0-50-19-97t-59-87l-50-50v128h-28v-176h176v28H638l50 50q45 45 65.5 97.5T774-484q0 46-13.5 88.5T722-316ZM335-703l-19-19q14-10 28-17.5t30-14.5v30q-11 5-20.5 10T335-703Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabledW100Filled.displayName = 'OnesyIconMaterialSyncDisabledW100Filled';

export default IconMaterialSyncDisabledW100Filled;
