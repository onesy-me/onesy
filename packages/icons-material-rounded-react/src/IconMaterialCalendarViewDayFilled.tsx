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
      <path d="M200-280q-33 0-56.5-23.5T120-360v-240q0-33 23.5-56.5T200-680h560q33 0 56.5 23.5T840-600v240q0 33-23.5 56.5T760-280H200Zm-41-480q-17 0-28-11.5T120-800q0-17 11.5-28.5T160-840h641q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-760H159Zm0 640q-17 0-28-11.5T120-160q0-17 11.5-28.5T160-200h641q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-120H159Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayFilled.displayName = 'OnesyIconMaterialCalendarViewDayFilled';

export default IconMaterialCalendarViewDayFilled;
