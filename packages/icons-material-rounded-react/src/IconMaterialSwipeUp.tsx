import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUp'

      short_name='SwipeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M213-802q-7 25-10 50.5t-3 51.5q0 63 18 121.5T270-468q8 11 7 24t-10 22q-9 9-21 8t-20-12q-42-60-64-130t-22-144q0-27 3-54t9-54l-49 49q-9 9-21 9t-21-9q-9-9-9-21t9-21l91-91q12-12 28-12t28 12l91 91q9 9 9 21t-9 21q-9 9-21 8.5t-21-8.5l-44-43Zm445 675q-23 8-46.5 7.5T566-131L340-236q-15-7-21-22.5t1-30.5l2-4q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l130 357q7 19-4 35.5T516-268l-47 3 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57ZM538-594q16-6 30.5 1t20.5 23l41 112q6 16-1 31t-23 21q-16 6-31-1t-21-23l-40-113q-6-16 1-30.5t23-20.5Zm126-3q16-6 30.5 1t20.5 23l27 75q6 16-.5 30.5T719-447q-16 6-31-1t-21-23l-27-75q-6-16 1-30.5t23-20.5Zm15 242Z"/>
    </Icon>
  );
});

IconMaterialSwipeUp.displayName = 'OnesyIconMaterialSwipeUp';

export default IconMaterialSwipeUp;
