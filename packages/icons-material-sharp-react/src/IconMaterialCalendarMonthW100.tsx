import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMonthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonthW100'

      short_name='CalendarMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-392v-56h56v56h-56Zm-160 0v-56h56v56h-56Zm320 0v-56h56v56h-56ZM452-240v-56h56v56h-56Zm-160 0v-56h56v56h-56Zm320 0v-56h56v56h-56ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Zm0-396h560v-164H200v164Zm0 0v-164 164Z"/>
    </Icon>
  );
});

IconMaterialCalendarMonthW100.displayName = 'OnesyIconMaterialCalendarMonthW100';

export default IconMaterialCalendarMonthW100;
