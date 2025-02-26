import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomW100'

      short_name='BorderBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomW100.displayName = 'OnesyIconMaterialBorderBottomW100';

export default IconMaterialBorderBottomW100;
