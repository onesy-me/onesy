import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseW100Filled'

      short_name='Close'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/>
    </Icon>
  );
});

IconMaterialCloseW100Filled.displayName = 'OnesyIconMaterialCloseW100Filled';

export default IconMaterialCloseW100Filled;
