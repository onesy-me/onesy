import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationUpW100Filled'

      short_name='ScreenRotationUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M604-212H346q-23 0-38.5-15.5T292-266v-302q0-6 4.5-10t9.5-4q6 0 10 4t4 10v296q0 14 9 23t23 9h251l-89-90q-2-2-3-5t-1-5q0-3 1-5t3-4q2-2 4-3t5-1q3 0 6 1t5 3l102 102q5 5 7 10t2 11q0 5-2 10.5t-7 10.5L534-103q-2 2-4.5 3t-5.5 1q-2 0-5-1t-5-3q-2-2-3-5t-1-5q0-3 1-5.5t3-4.5l90-89Zm64-482v303q0 6-4.5 10t-9.5 4q-6 0-10-4t-4-10v-297q0-14-9-23t-23-9H357l89 90q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5L324-713q-5-5-7-10.5t-2-10.5q0-6 2-11t7-10l102-102q5-5 10-5t10 5q5 5 5 10t-5 10l-90 89h258q23 0 38.5 15.5T668-694Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationUpW100Filled.displayName = 'OnesyIconMaterialScreenRotationUpW100Filled';

export default IconMaterialScreenRotationUpW100Filled;
