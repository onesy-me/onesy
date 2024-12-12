import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRightW100Filled'

      short_name='BorderRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm156 576v-616h28v616h-28Z"/>
    </Icon>
  );
});

IconMaterialBorderRightW100Filled.displayName = 'OnesyIconMaterialBorderRightW100Filled';

export default IconMaterialBorderRightW100Filled;
