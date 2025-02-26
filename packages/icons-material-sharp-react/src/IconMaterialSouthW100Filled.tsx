import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthW100Filled'

      short_name='South'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 234-378l19-19 213 213v-645h28v644l213-213 19 20-246 246Z"/>
    </Icon>
  );
});

IconMaterialSouthW100Filled.displayName = 'OnesyIconMaterialSouthW100Filled';

export default IconMaterialSouthW100Filled;
