import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignette2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vignette2W100Filled'

      short_name='Vignette2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm308-106q85 0 144-58.5T683-480q0-85-59.21-144T480-683q-85 0-143.5 59.21T278-480q0 85 58.5 143.5T480-278Z"/>
    </Icon>
  );
});

IconMaterialVignette2W100Filled.displayName = 'OnesyIconMaterialVignette2W100Filled';

export default IconMaterialVignette2W100Filled;
