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
      <path d="M524-92q-73 0-137-27.5T275-195q-48-48-75.5-112T172-444q0-95 47-176.5T349-749q14-8 27.5-1.5T392-729q8 81 41.5 154.5T524-444q57 57 129.5 90T807-313q16 2 23 16t-1 28q-47 83-128.5 130T524-92Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeW100Filled.displayName = 'OnesyIconMaterialQuietTimeW100Filled';

export default IconMaterialQuietTimeW100Filled;
