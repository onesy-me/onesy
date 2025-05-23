import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncProblemFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncProblemFilled'

      short_name='SyncProblem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-80h110l-16-14q-49-49-71.5-106.5T120-478q0-111 66.5-197.5T360-790v84q-72 26-116 88.5T200-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H120Zm360-120q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-40-160v-240h80v240h-80Zm160 270v-84q72-26 116-88.5T760-482q0-45-17-87.5T690-648l-10-10v98h-80v-240h240v80H730l16 14q49 49 71.5 106.5T840-482q0 111-66.5 197.5T600-170Z"/>
    </Icon>
  );
});

IconMaterialSyncProblemFilled.displayName = 'OnesyIconMaterialSyncProblemFilled';

export default IconMaterialSyncProblemFilled;
