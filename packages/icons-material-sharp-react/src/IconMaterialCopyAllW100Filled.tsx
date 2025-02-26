import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCopyAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllW100Filled'

      short_name='CopyAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-276v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-144v-552h432v552H316Zm144 144v-40h40v40h-40Zm-288 0v-40h40v40h-40Zm432 0v-40h40v40h-40ZM172-708v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialCopyAllW100Filled.displayName = 'OnesyIconMaterialCopyAllW100Filled';

export default IconMaterialCopyAllW100Filled;
