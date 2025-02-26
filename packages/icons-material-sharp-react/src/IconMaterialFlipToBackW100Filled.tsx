import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipToBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackW100Filled'

      short_name='FlipToBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-472h28v444h444v28H172Zm144-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-432v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0 432v-40h40v40h-40Zm144-432v-40h40v40h-40Zm0 432v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialFlipToBackW100Filled.displayName = 'OnesyIconMaterialFlipToBackW100Filled';

export default IconMaterialFlipToBackW100Filled;
