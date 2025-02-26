import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarTodayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayW100Filled'

      short_name='CalendarToday'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Z"/>
    </Icon>
  );
});

IconMaterialCalendarTodayW100Filled.displayName = 'OnesyIconMaterialCalendarTodayW100Filled';

export default IconMaterialCalendarTodayW100Filled;
