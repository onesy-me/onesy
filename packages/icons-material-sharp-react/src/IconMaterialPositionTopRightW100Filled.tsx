import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionTopRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightW100Filled'

      short_name='PositionTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-602h308v-68H380v68ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightW100Filled.displayName = 'OnesyIconMaterialPositionTopRightW100Filled';

export default IconMaterialPositionTopRightW100Filled;
