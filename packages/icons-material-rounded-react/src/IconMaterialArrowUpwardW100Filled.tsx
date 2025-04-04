import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowUpwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardW100Filled'

      short_name='ArrowUpward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-694 242-470q-4 4-9.5 4.5T222-470q-5-5-5-10t5-10l237-237q5-5 10-7t11-2q6 0 11 2t10 7l237 237q4 4 4.5 9.5T738-470q-5 5-10 5t-10-5L494-694v468q0 6-4 10t-10 4q-6 0-10-4t-4-10v-468Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardW100Filled.displayName = 'OnesyIconMaterialArrowUpwardW100Filled';

export default IconMaterialArrowUpwardW100Filled;
