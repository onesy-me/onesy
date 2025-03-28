import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100'

      short_name='TakeoutDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-240h276q13 0 22-8.5t10-21.5l21-266H289l21 266q1 13 10 21.5t22 8.5Zm-55-324h386l7-84-114-112H394L280-648l7 84Zm-26 28L125-663q-4-4-4-9t3-10q4-5 9.5-6t10.5 4l114 108-4-55q-1-13 3.5-25t13.5-21l93-93q8-8 19.5-13t23.5-5h146q12 0 23.5 5t19.5 13l93 93q9 9 13.5 21t3.5 25l-4 55 114-108q5-5 10.5-4t9.5 6q3 5 3 10t-4 9L699-536H261Zm357 324H342q-23 0-40.5-16T282-267l-21-269h438l-21 269q-2 23-19.5 39T618-212ZM480-564Zm0 28Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100.displayName = 'OnesyIconMaterialTakeoutDiningW100';

export default IconMaterialTakeoutDiningW100;
