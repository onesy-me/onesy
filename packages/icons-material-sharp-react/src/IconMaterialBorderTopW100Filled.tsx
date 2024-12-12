import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopW100Filled'

      short_name='BorderTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-156v-28h616v28H172Zm144 588v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 288v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 288v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialBorderTopW100Filled.displayName = 'OnesyIconMaterialBorderTopW100Filled';

export default IconMaterialBorderTopW100Filled;
