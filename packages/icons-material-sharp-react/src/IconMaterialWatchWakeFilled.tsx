import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchWakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWakeFilled'

      short_name='WatchWake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-280v-80h80v80h-80Zm0-160v-80h120v80H760Zm0-160v-81h160v81H760ZM280-80l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L520-80H280Zm120-200q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280Z"/>
    </Icon>
  );
});

IconMaterialWatchWakeFilled.displayName = 'OnesyIconMaterialWatchWakeFilled';

export default IconMaterialWatchWakeFilled;
