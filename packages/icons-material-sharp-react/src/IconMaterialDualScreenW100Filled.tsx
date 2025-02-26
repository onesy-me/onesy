import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100Filled'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-237v-591l296 118v592L212-237Zm376-15v-512l-161-64h321v576H588Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100Filled.displayName = 'OnesyIconMaterialDualScreenW100Filled';

export default IconMaterialDualScreenW100Filled;
