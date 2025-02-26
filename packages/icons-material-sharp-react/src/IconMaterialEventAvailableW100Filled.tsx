import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventAvailableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableW100Filled'

      short_name='EventAvailable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-264 332-370l20-20 86 86 170-170 20 20-190 190ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Z"/>
    </Icon>
  );
});

IconMaterialEventAvailableW100Filled.displayName = 'OnesyIconMaterialEventAvailableW100Filled';

export default IconMaterialEventAvailableW100Filled;
