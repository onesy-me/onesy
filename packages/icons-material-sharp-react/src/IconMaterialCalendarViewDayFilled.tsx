import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewDayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayFilled'

      short_name='CalendarViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-160v-400h720v400H120Zm0-480v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayFilled.displayName = 'OnesyIconMaterialCalendarViewDayFilled';

export default IconMaterialCalendarViewDayFilled;
