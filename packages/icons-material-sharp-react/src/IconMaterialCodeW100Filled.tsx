import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeW100Filled'

      short_name='Code'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-276 116-480l204-204 20 20-184 184 184 184-20 20Zm320 0-20-20 184-184-184-184 20-20 204 204-204 204Z"/>
    </Icon>
  );
});

IconMaterialCodeW100Filled.displayName = 'OnesyIconMaterialCodeW100Filled';

export default IconMaterialCodeW100Filled;
