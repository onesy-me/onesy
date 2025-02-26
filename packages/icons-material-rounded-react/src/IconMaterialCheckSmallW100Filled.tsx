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
      <path d="m400-379 254-255q3.91-4 9.96-4 6.04 0 10.04 3.93 4 3.93 4 10T674-614L421-362q-9 9-21 9t-21-9l-93-92q-4-3.91-4-9.96 0-6.04 3.93-10.04 3.93-4 10-4t10.07 4l94 95Z"/>
    </Icon>
  );
});

IconMaterialCheckSmallW100Filled.displayName = 'OnesyIconMaterialCheckSmallW100Filled';

export default IconMaterialCheckSmallW100Filled;
