import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFramesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesW100'

      short_name='FilterFrames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-616h220l128-128 128 128h220v616H132Zm28-28h640v-560H160v560Zm100-100v-360h440v360H260Zm28-28h384v-304H288v304Zm192-152Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesW100.displayName = 'OnesyIconMaterialFilterFramesW100';

export default IconMaterialFilterFramesW100;
