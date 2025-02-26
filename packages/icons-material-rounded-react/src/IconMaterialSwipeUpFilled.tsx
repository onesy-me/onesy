import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpFilled'

      short_name='SwipeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M213-802q-7 25-10 50.5t-3 51.5q0 63 18 121.5T270-468q8 11 7 24t-10 22q-9 9-21 8t-20-12q-42-60-64-130t-22-144q0-27 3-54t9-54l-49 49q-9 9-21 9t-21-9q-9-9-9-21t9-21l91-91q12-12 28-12t28 12l91 91q9 9 9 21t-9 21q-9 9-21 8.5t-21-8.5l-44-43Zm445 675q-23 8-46.5 7.5T566-131L340-236q-15-7-21-22.5t1-30.5l2-4q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l96 263 38-14-41-113q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 113 37-14-27-75q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l27 75 38-14q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpFilled.displayName = 'OnesyIconMaterialSwipeUpFilled';

export default IconMaterialSwipeUpFilled;
