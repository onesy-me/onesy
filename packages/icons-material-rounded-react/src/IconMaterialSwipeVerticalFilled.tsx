import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalFilled'

      short_name='SwipeVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M161-140q-59-72-90-159T40-480q0-94 31-181t90-159h-51q-13 0-21.5-8.5T80-850q0-13 8.5-21.5T110-880h130q17 0 28.5 11.5T280-840v130q0 13-8.5 21.5T250-680q-13 0-21.5-8.5T220-710v-86q-58 66-89 147t-31 169q0 88 31 169t89 147v-86q0-13 8.5-21.5T250-280q13 0 21.5 8.5T280-250v130q0 17-11.5 28.5T240-80H110q-13 0-21.5-8.5T80-110q0-13 8.5-21.5T110-140h51Zm497 13q-23 8-46.5 7.5T566-131L340-236q-15-7-21-22.5t1-30.5l2-4q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l96 263 38-14-37-103q-6-16-1-35.5t21-25.5q16-6 30.5 1t20.5 23l41 113 37-14-27-75q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l27 75 38-14q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalFilled.displayName = 'OnesyIconMaterialSwipeVerticalFilled';

export default IconMaterialSwipeVerticalFilled;
