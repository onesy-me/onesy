import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownW100'

      short_name='SwipeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-410q-10-37-15-74.5t-5-75.5q0-69 21-133t60-121q4-5 9.5-7t10.5 3q5 5 5 11.5t-4 11.5q-35 53-54.5 112.5T200-560q0 39 5 77.5t16 75.5l75-75q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-86 86q-9 9-21 9t-21-9l-87-87q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l72 72Zm458 230q-17 6-36 5.5t-36-8.5L347-290q-8-4-10.5-12t1.5-16q5-8 12.5-12.5T367-336l128-15-115-314q-2-6 .5-11t8.5-7q6-2 11 .5t7 8.5l114 312q5 14-3 26.5T495-321l-126 11 221 102q11 5 24.5 6t25.5-4l132-48q42-15 60.5-54.5T836-390l-55-150q-2-6 0-11t8-7q6-2 11 0t7 8l55 150q20 53-3.5 103T782-228l-132 48ZM539-595q6-2 11 .5t7 8.5l50 137q2 5-.5 10.5T599-431q-5 2-11-1t-8-8l-50-137q-2-6 .5-11t8.5-7Zm119 0q6-2 11 0t7 8l36 99q2 5-.5 11t-8.5 8q-5 2-10.5-1t-7.5-8l-36-100q-2-6 .5-10.5t8.5-6.5Zm24 244Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownW100.displayName = 'OnesyIconMaterialSwipeDownW100';

export default IconMaterialSwipeDownW100;
