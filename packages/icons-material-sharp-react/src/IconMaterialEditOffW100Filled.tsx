import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100Filled'

      short_name='EditOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m577-497-80-80 222-223 81 81-223 222Zm213 367L500-419 252-172h-80v-80l247-248-289-290 20-20 660 660-20 20Zm-91-529 61-60-41-41-60 61 40 40Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100Filled.displayName = 'OnesyIconMaterialEditOffW100Filled';

export default IconMaterialEditOffW100Filled;
