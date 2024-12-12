import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenW100Filled'

      short_name='Splitscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-539v-249h616v249H172Zm0 367v-248h616v248H172Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenW100Filled.displayName = 'OnesyIconMaterialSplitscreenW100Filled';

export default IconMaterialSplitscreenW100Filled;
