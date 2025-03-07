import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownFilled'

      short_name='SwipeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-472q-6-27-9-54t-3-54q0-74 22-144t64-130q8-11 20-12.5t21 7.5q9 9 10 22.5t-7 24.5q-35 52-52.5 110.5T200-580q0 26 3 51.5t10 50.5l44-43q9-8 21-8.5t21 8.5q9 9 9 21t-9 21l-91 91q-12 12-28 12t-28-12l-91-91q-9-9-9-21t9-21q9-9 21-9t21 9l49 49Zm506 345q-23 8-46.5 7.5T566-131L340-236q-15-7-21-22.5t1-30.5l2-4q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l96 263 38-14-41-113q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 113 37-14-27-75q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l27 75 38-14q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownFilled.displayName = 'OnesyIconMaterialSwipeDownFilled';

export default IconMaterialSwipeDownFilled;
