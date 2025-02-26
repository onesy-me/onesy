import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuietTimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeW100Filled'

      short_name='QuietTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-92q-73 0-137-27.5T275-195q-48-48-75.5-112T172-444q0-108 59.5-196.5T391-769q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T524-92Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeW100Filled.displayName = 'OnesyIconMaterialQuietTimeW100Filled';

export default IconMaterialQuietTimeW100Filled;
