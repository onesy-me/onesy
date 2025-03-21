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
      <path d="M526-240q-13 0-22.5-9.5T494-272v-416q0-13 9.5-22.5T526-720h75q13 0 22.5 9.5T633-688v416q0 13-9.5 22.5T601-240h-75Zm-167 0q-13 0-22.5-9.5T327-272v-416q0-13 9.5-22.5T359-720h75q13 0 22.5 9.5T466-688v416q0 13-9.5 22.5T434-240h-75Zm-167 0q-14 0-23-9t-9-23v-416q0-14 9-23t23-9h75q13 0 22.5 9.5T299-688v416q0 13-9.5 22.5T267-240h-75Zm501 0q-13 0-22.5-9.5T661-272v-416q0-13 9.5-22.5T693-720h75q14 0 23 9t9 23v416q0 14-9 23t-23 9h-75Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekW100Filled.displayName = 'OnesyIconMaterialCalendarViewWeekW100Filled';

export default IconMaterialCalendarViewWeekW100Filled;
