import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVertical'

      short_name='SwipeVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M161-140q-59-72-90-159T40-480q0-94 31-181t90-159h-51q-13 0-21.5-8.5T80-850q0-13 8.5-21.5T110-880h130q17 0 28.5 11.5T280-840v130q0 13-8.5 21.5T250-680q-13 0-21.5-8.5T220-710v-86q-58 66-89 147t-31 169q0 88 31 169t89 147v-86q0-13 8.5-21.5T250-280q13 0 21.5 8.5T280-250v130q0 17-11.5 28.5T240-80H110q-13 0-21.5-8.5T80-110q0-13 8.5-21.5T110-140h51Zm497 13q-23 8-46.5 7.5T566-131L340-236q-15-7-21-22.5t1-30.5l2-4q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l130 357q7 19-4 35.5T516-268l-47 3 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57ZM514-543q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 112q6 16-1 31t-23 21q-16 6-31-1t-21-23l-40-113Zm126-3q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l27 75q6 16-.5 30.5T719-447q-16 6-31-1t-21-23l-27-75Zm49 191Z"/>
    </Icon>
  );
});

IconMaterialSwipeVertical.displayName = 'OnesyIconMaterialSwipeVertical';

export default IconMaterialSwipeVertical;
