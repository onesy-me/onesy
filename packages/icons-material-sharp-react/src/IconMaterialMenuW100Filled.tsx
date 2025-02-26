import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuW100Filled'

      short_name='Menu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialMenuW100Filled.displayName = 'OnesyIconMaterialMenuW100Filled';

export default IconMaterialMenuW100Filled;
