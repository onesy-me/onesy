import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardW100Filled'

      short_name='FastForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M183-368v-224q0-14 9-22t21-8q5 0 9 1t8 4l168 112q7 5 10 11t3 14q0 8-3 14t-10 11L230-343q-4 3-8 4t-9 1q-12 0-21-8t-9-22Zm342 0v-224q0-14 9-22t21-8q5 0 9 1t8 4l168 112q7 5 10 11t3 14q0 8-3 14t-10 11L572-343q-4 3-8 4t-9 1q-12 0-21-8t-9-22Z"/>
    </Icon>
  );
});

IconMaterialFastForwardW100Filled.displayName = 'OnesyIconMaterialFastForwardW100Filled';

export default IconMaterialFastForwardW100Filled;
