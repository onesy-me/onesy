import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastRewindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindW100Filled'

      short_name='FastRewind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-343 562-455q-7-5-10-11t-3-14q0-8 3-14t10-11l168-112q4-3 8-4t9-1q12 0 21 8t9 22v224q0 14-9 22t-21 8q-5 0-9-1t-8-4Zm-342 0L220-455q-7-5-10-11t-3-14q0-8 3-14t10-11l168-112q4-3 8-4t9-1q12 0 21 8t9 22v224q0 14-9 22t-21 8q-5 0-9-1t-8-4Z"/>
    </Icon>
  );
});

IconMaterialFastRewindW100Filled.displayName = 'OnesyIconMaterialFastRewindW100Filled';

export default IconMaterialFastRewindW100Filled;
