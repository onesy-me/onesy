import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarClockW100Filled'

      short_name='CalendarClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-6.8 4.64-11.4 4.64-4.6 11.5-4.6t11.36 4.6q4.5 4.6 4.5 11.4v76h276v-78q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v78h80q26 0 43 17t17 43v191q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-31H200v336q0 12 10 22t22 10h265q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232Zm508 40q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T740-92Zm14-154.2V-340q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v94q0 5.57 2 10.78 2 5.22 7 10.22l61 61q4 4 9.5 4.5T816-164q5-5 5-10t-5-10l-62-62.2Z"/>
    </Icon>
  );
});

IconMaterialCalendarClockW100Filled.displayName = 'OnesyIconMaterialCalendarClockW100Filled';

export default IconMaterialCalendarClockW100Filled;
