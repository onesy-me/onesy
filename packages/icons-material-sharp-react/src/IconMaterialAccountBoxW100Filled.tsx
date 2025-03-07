import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100Filled'

      short_name='AccountBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-436q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM172-172v-616h616v616H172Zm28-28h560v-26q-54-53-125.5-83.5T480-340q-83 0-154.5 30.5T200-226v26Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100Filled.displayName = 'OnesyIconMaterialAccountBoxW100Filled';

export default IconMaterialAccountBoxW100Filled;
