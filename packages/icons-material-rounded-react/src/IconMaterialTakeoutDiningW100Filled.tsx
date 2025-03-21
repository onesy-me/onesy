import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100Filled'

      short_name='TakeoutDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M251-544 125-663q-4-4-4-9t3-10q4-5 9.5-6t10.5 4l114 108-4-55q-1-13 3.5-25t13.5-21l93-93q8-8 19.5-13t23.5-5h146q12 0 23.5 5t19.5 13l93 93q9 9 13.5 21t3.5 25l-4 55 114-108q5-5 10.5-4t9.5 6q3 5 3 10t-4 9L709-544H251Zm367 332H342q-23 0-40.5-16T282-267l-19-249h434l-19 249q-2 23-19.5 39T618-212Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100Filled.displayName = 'OnesyIconMaterialTakeoutDiningW100Filled';

export default IconMaterialTakeoutDiningW100Filled;
