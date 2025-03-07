import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudSyncFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncFilled'

      short_name='CloudSync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-80h109q-51-44-80-106t-29-134q0-112 68-197.5T400-790v84q-70 25-115 86.5T240-480q0 54 21.5 99.5T320-302v-98h80v240H160Zm440 0q-50 0-85-35t-35-85q0-48 33-82.5t81-36.5q17-36 50.5-58.5T720-480q53 0 91.5 34.5T858-360q42 0 72 29t30 70q0 42-29 71.5T860-160H600Zm116-360q-7-41-27-76t-49-62v98h-80v-240h240v80H691q43 38 70.5 89T797-520h-81Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncFilled.displayName = 'OnesyIconMaterialCloudSyncFilled';

export default IconMaterialCloudSyncFilled;
