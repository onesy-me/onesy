import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVerticalW100'

      short_name='BorderVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm150 576v-616h28v616h-28Zm138 0v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialBorderVerticalW100.displayName = 'OnesyIconMaterialBorderVerticalW100';

export default IconMaterialBorderVerticalW100;
