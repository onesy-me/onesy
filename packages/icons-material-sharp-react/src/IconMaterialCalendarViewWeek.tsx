import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeek'

      short_name='CalendarViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-240h100v-480H520v480Zm-180 0h100v-480H340v480Zm-180 0h100v-480H160v480Zm540 0h100v-480H700v480ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeek.displayName = 'OnesyIconMaterialCalendarViewWeek';

export default IconMaterialCalendarViewWeek;
