import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResizeW100'

      short_name='Resize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-604v-156H604v-28h184v184h-28ZM172-172v-184h28v156h156v28H172Zm0-288v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialResizeW100.displayName = 'OnesyIconMaterialResizeW100';

export default IconMaterialResizeW100;
