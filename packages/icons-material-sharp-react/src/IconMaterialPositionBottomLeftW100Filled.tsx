import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionBottomLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeftW100Filled'

      short_name='PositionBottomLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-290h308v-68H272v68ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeftW100Filled.displayName = 'OnesyIconMaterialPositionBottomLeftW100Filled';

export default IconMaterialPositionBottomLeftW100Filled;
