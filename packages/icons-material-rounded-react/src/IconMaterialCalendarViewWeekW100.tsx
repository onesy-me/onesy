import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewWeekW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekW100'

      short_name='CalendarViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm302-28h139v-480H494v480Zm-167 0h139v-480H327v480Zm-135 0h107v-480H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm469 0h107q14 0 23-9t9-23v-416q0-14-9-23t-23-9H661v480Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekW100.displayName = 'OnesyIconMaterialCalendarViewWeekW100';

export default IconMaterialCalendarViewWeekW100;
