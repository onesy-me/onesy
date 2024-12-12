import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditW100Filled'

      short_name='Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-80l546-548 82 82-548 546h-80Zm527-487 61-60-41-41-60 61 40 40Z"/>
    </Icon>
  );
});

IconMaterialEditW100Filled.displayName = 'OnesyIconMaterialEditW100Filled';

export default IconMaterialEditW100Filled;
