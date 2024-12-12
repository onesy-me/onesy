import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekW100Filled'

      short_name='CalendarViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-240v-480h139v480H494Zm-167 0v-480h139v480H327Zm-167 0v-480h139v480H160Zm501 0v-480h139v480H661Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekW100Filled.displayName = 'OnesyIconMaterialCalendarViewWeekW100Filled';

export default IconMaterialCalendarViewWeekW100Filled;
