import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncProblemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncProblemW100'

      short_name='SyncProblem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-194v-28h128l-50-50q-45-45-65.5-97.5T170-476q0-92 51.5-167.5T358-754v30q-73 32-116.5 99.5T198-476q0 50 19 97t59 87l50 50v-128h28v176H178Zm302-98q-11 0-19.5-8.5T452-320q0-11 8.5-19.5T480-348q11 0 19.5 8.5T508-320q0 11-8.5 19.5T480-292Zm-14-136v-226h28v226h-28Zm136 222v-30q73-32 116.5-99.5T762-484q0-50-19-97t-59-87l-50-50v128h-28v-176h176v28H654l50 50q45 45 65.5 97.5T790-484q0 92-51.5 167.5T602-206Z"/>
    </Icon>
  );
});

IconMaterialSyncProblemW100.displayName = 'OnesyIconMaterialSyncProblemW100';

export default IconMaterialSyncProblemW100;
