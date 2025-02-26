import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightW100Filled'

      short_name='Straight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-564l-91 91-19-19 124-124 124 124-19 19-91-91v564h-28Z"/>
    </Icon>
  );
});

IconMaterialStraightW100Filled.displayName = 'OnesyIconMaterialStraightW100Filled';

export default IconMaterialStraightW100Filled;
