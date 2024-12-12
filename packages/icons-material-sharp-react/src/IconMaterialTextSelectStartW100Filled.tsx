import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectStartW100Filled'

      short_name='TextSelectStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-172v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40ZM172-172v-28h80v-560h-80v-28h188v28h-80v560h80v28H172Z"/>
    </Icon>
  );
});

IconMaterialTextSelectStartW100Filled.displayName = 'OnesyIconMaterialTextSelectStartW100Filled';

export default IconMaterialTextSelectStartW100Filled;
