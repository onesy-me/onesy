import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayCurrentPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitW100Filled'

      short_name='StayCurrentPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitW100Filled.displayName = 'OnesyIconMaterialStayCurrentPortraitW100Filled';

export default IconMaterialStayCurrentPortraitW100Filled;
