import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorOfflineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineFilled'

      short_name='DetectorOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-120-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-52-520 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Z"/>
    </Icon>
  );
});

IconMaterialDetectorOfflineFilled.displayName = 'OnesyIconMaterialDetectorOfflineFilled';

export default IconMaterialDetectorOfflineFilled;
