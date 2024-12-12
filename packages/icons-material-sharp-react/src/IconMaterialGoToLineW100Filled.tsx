import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoToLineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoToLineW100Filled'

      short_name='GoToLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-680v-68h68v68h-68Zm0 468v-68h68v68h-68Z"/>
    </Icon>
  );
});

IconMaterialGoToLineW100Filled.displayName = 'OnesyIconMaterialGoToLineW100Filled';

export default IconMaterialGoToLineW100Filled;
