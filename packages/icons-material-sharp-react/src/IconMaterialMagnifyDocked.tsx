import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnifyDocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyDocked'

      short_name='MagnifyDocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-160h640v-400H160v400Zm400-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialMagnifyDocked.displayName = 'OnesyIconMaterialMagnifyDocked';

export default IconMaterialMagnifyDocked;
