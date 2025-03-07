import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10W100Filled'

      short_name='Timer10'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M531-274h148q14 0 23-9t9-23v-348q0-14-9-23t-23-9H531q-14 0-23 9t-9 23v348q0 14 9 23t23 9Zm0 28q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h148q26 0 43 17t17 43v348q0 26-17 43t-43 17H531ZM323-686h-87q-6 0-10-4t-4-10q0-6 4-10t10-4h85q13 0 21.5 8.5T351-684v424q0 6-4 10t-10 4q-6 0-10-4t-4-10v-426Z"/>
    </Icon>
  );
});

IconMaterialTimer10W100Filled.displayName = 'OnesyIconMaterialTimer10W100Filled';

export default IconMaterialTimer10W100Filled;
