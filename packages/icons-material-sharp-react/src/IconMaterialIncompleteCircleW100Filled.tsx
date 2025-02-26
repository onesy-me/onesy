import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIncompleteCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IncompleteCircleW100Filled'

      short_name='IncompleteCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.4-63.56-27.41-110.57-74.39-47.02-46.98-74.44-110.49Q132-407.79 132-480q0-72 27-135t75-111l246 246v-348q72 0 135.56 27.39t110.57 74.35q47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialIncompleteCircleW100Filled.displayName = 'OnesyIconMaterialIncompleteCircleW100Filled';

export default IconMaterialIncompleteCircleW100Filled;
