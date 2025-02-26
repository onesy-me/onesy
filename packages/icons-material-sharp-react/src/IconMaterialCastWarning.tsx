import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastWarning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastWarning'

      short_name='CastWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM80-280q50 0 85 35t35 85H80v-120Zm0-160q117 0 198.5 81.5T360-160h-80q0-83-58.5-141.5T80-360v-80Zm0-160q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80Zm800 440H600q0-20-1.5-40t-4.5-40h206v-212q22-7 42-16.5t38-22.5v331ZM80-680v-120h372q-6 19-9 39t-3 41H160v46q-20-3-40-4.5T80-680Zm640 160q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520Zm20-80v-40h-40v40h40Zm-40-80h40v-160h-40v160Z"/>
    </Icon>
  );
});

IconMaterialCastWarning.displayName = 'OnesyIconMaterialCastWarning';

export default IconMaterialCastWarning;
