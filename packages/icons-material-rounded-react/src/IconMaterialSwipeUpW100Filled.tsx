import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpW100Filled'

      short_name='SwipeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M221-825q-11 37-16 75.5t-5 77.5q0 63 19.5 122.5T274-437q4 5 4 11.5t-5 11.5q-5 5-10.5 3t-9.5-7q-38-57-59.5-121T172-672q0-38 5-75.5t15-74.5l-72 72q-4 4-10 4.5t-10-4.5q-4-4-3.5-10t4.5-10l86-86q9-9 21-9t21 9l87 87q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5l-75-75Zm429 645q-17 6-36 5.5t-36-8.5L347-290q-8-4-10.5-12t1.5-16q5-8 12.5-12.5T367-336l128-15-115-314q-2-6 .5-11t8.5-7q6-2 11 .5t7 8.5l100 276 78-28-55-151q-2-6 .5-11t8.5-7q6-2 11 .5t7 8.5l55 150 78-29-41-113q-2-6 .5-10.5t8.5-6.5q6-2 11 0t7 8l41 112 78-28-14-37q-2-6 0-11t8-7q6-2 11 0t7 8l55 150q20 53-3.5 103T782-228l-132 48Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpW100Filled.displayName = 'OnesyIconMaterialSwipeUpW100Filled';

export default IconMaterialSwipeUpW100Filled;
