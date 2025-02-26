import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderInnerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerW100Filled'

      short_name='BorderInner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm288 576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-144v-40h40v40h-40Zm-144 0v-40h40v40h-40ZM466-172v-294H172v-28h294v-294h28v294h294v28H494v294h-28Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerW100Filled.displayName = 'OnesyIconMaterialBorderInnerW100Filled';

export default IconMaterialBorderInnerW100Filled;
