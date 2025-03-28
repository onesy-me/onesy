import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastConnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedFilled'

      short_name='CastConnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-160H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-120h800v640Zm-800 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Zm135-160q-35-109-111.5-192T281-640h439v320H575Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedFilled.displayName = 'OnesyIconMaterialCastConnectedFilled';

export default IconMaterialCastConnectedFilled;
