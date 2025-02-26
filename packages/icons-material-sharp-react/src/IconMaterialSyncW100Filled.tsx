import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncW100Filled'

      short_name='Sync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M194-194v-28h128l-50-50q-45-45-65.5-97.5T186-476q0-92 51.5-167.5T374-754v30q-73 32-116.5 99.5T214-476q0 50 19 97t59 87l50 50v-128h28v176H194Zm392-12v-30q73-32 116.5-99.5T746-484q0-50-19-97t-59-87l-50-50v128h-28v-176h176v28H638l50 50q45 45 65.5 97.5T774-484q0 92-51.5 167.5T586-206Z"/>
    </Icon>
  );
});

IconMaterialSyncW100Filled.displayName = 'OnesyIconMaterialSyncW100Filled';

export default IconMaterialSyncW100Filled;
