import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckW100Filled'

      short_name='Check'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-276 192-466l20-20 170 170 366-366 20 20-386 386Z"/>
    </Icon>
  );
});

IconMaterialCheckW100Filled.displayName = 'OnesyIconMaterialCheckW100Filled';

export default IconMaterialCheckW100Filled;
