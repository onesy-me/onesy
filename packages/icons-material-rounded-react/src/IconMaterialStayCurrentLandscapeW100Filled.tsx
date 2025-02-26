import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayCurrentLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeW100Filled'

      short_name='StayCurrentLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h656q26 0 43 17t17 43v336q0 26-17 43t-43 17H152Zm62-28h532v-400H214v400Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeW100Filled.displayName = 'OnesyIconMaterialStayCurrentLandscapeW100Filled';

export default IconMaterialStayCurrentLandscapeW100Filled;
