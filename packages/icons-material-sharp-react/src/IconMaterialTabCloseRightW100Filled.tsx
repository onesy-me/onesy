import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRightW100Filled'

      short_name='TabCloseRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-77-19-19 88-90H626v-28h203l-88-90 19-19 123 123L760-77Zm-588-95v-616h616v366q-7-1-14-1.5t-14-.5q-43 0-80.5 15.5T612-367L499-480l114-114-19-19-114 114-114-114-19 19 114 114-114 114 19 19 114-114 113 113q-26 30-41.5 67.5T536-200q0 7 .5 14t1.5 14H172Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRightW100Filled.displayName = 'OnesyIconMaterialTabCloseRightW100Filled';

export default IconMaterialTabCloseRightW100Filled;
