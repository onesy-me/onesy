import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalW100Filled'

      short_name='SwipeVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-159q-59-68-95.5-149T96-479q0-91 36.5-171.5T228-800h-82q-6 0-10-4t-4-10q0-6 4-10t10-4h109q13 0 21.5 8.5T285-798v111q0 5-3.5 9t-9.5 4q-5 0-9.5-4.5T258-688v-104q-59 67-97 145.5T123-479q0 88 38 166t97 144v-103q0-5 4.5-9t9.5-4q5 0 9 4t4 9v110q0 13-8.5 21.5T255-132H145q-5 0-9-4.5t-4-9.5q0-5 4.5-9t9.5-4h82Zm422-21q-17 6-36 5.5t-36-8.5L347-290q-8-4-10.5-12t1.5-16q5-8 12.5-12.5T367-336l128-15-115-314q-2-6 .5-11t8.5-7q6-2 11 .5t7 8.5l100 276 78-28-51-141q-2-6-1.5-16t6.5-12q6-2 11 .5t7 8.5l55 150 78-29-41-113q-2-6 .5-10.5t8.5-6.5q6-2 11 0t7 8l41 112 78-28-14-37q-2-6 0-11t8-7q6-2 11 0t7 8l55 150q20 53-3.5 103T782-228l-132 48Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalW100Filled.displayName = 'OnesyIconMaterialSwipeVerticalW100Filled';

export default IconMaterialSwipeVerticalW100Filled;
