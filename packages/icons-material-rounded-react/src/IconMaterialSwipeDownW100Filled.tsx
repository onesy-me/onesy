import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownW100Filled'

      short_name='SwipeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-410q-10-37-15-74.5t-5-75.5q0-69 21-133t60-121q4-5 9.5-7t10.5 3q5 5 5 11.5t-4 11.5q-35 53-54.5 112.5T200-560q0 39 5 77.5t16 75.5l75-75q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-86 86q-9 9-21 9t-21-9l-87-87q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l72 72Zm458 230q-17 6-36 5.5t-36-8.5L347-290q-8-4-10.5-12t1.5-16q5-8 12.5-12.5T367-336l128-15-115-314q-2-6 .5-11t8.5-7q6-2 11 .5t7 8.5l100 276 78-28-55-151q-2-6 .5-11t8.5-7q6-2 11 .5t7 8.5l55 150 78-29-41-113q-2-6 .5-10.5t8.5-6.5q6-2 11 0t7 8l41 112 78-28-14-37q-2-6 0-11t8-7q6-2 11 0t7 8l55 150q20 53-3.5 103T782-228l-132 48Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownW100Filled.displayName = 'OnesyIconMaterialSwipeDownW100Filled';

export default IconMaterialSwipeDownW100Filled;
