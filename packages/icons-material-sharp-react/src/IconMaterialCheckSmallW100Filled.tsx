import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallW100Filled'

      short_name='CheckSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-341 277-464l19-19 104 104 264-264 19 19-283 283Z"/>
    </Icon>
  );
});

IconMaterialCheckSmallW100Filled.displayName = 'OnesyIconMaterialCheckSmallW100Filled';

export default IconMaterialCheckSmallW100Filled;
