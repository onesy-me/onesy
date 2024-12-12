import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllW100Filled'

      short_name='SelectAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-316v-328h328v328H316Zm28-28h272v-272H344v272Zm-28 172v-40h40v40h-40ZM172-748v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0 576v-40h40v40h-40Zm144-576v-40h40v40h-40ZM172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm576 432v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialSelectAllW100Filled.displayName = 'OnesyIconMaterialSelectAllW100Filled';

export default IconMaterialSelectAllW100Filled;
