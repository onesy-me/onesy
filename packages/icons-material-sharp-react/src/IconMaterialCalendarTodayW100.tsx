import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarTodayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayW100'

      short_name='CalendarToday'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Zm0-396h560v-164H200v164Zm0 0v-164 164Z"/>
    </Icon>
  );
});

IconMaterialCalendarTodayW100.displayName = 'OnesyIconMaterialCalendarTodayW100';

export default IconMaterialCalendarTodayW100;
