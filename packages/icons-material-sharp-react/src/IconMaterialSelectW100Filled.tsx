import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectW100Filled'

      short_name='Select'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-172v-40h40v40h-40ZM172-748v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0 576v-40h40v40h-40Zm144-576v-40h40v40h-40ZM172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm576 432v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialSelectW100Filled.displayName = 'OnesyIconMaterialSelectW100Filled';

export default IconMaterialSelectW100Filled;
