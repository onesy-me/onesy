import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFramesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesW100Filled'

      short_name='FilterFrames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-616h220l128-128 128 128h220v616H132Zm28-28h640v-560H160v560Zm100-100v-360h440v360H260Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesW100Filled.displayName = 'OnesyIconMaterialFilterFramesW100Filled';

export default IconMaterialFilterFramesW100Filled;
