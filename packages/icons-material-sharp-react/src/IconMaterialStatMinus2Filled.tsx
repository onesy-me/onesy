import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStatMinus2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus2Filled'

      short_name='StatMinus2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialStatMinus2Filled.displayName = 'OnesyIconMaterialStatMinus2Filled';

export default IconMaterialStatMinus2Filled;
