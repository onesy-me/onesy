import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthW100Filled'

      short_name='CalendarViewMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-494v-226h195v226H160Zm223 0v-226h194v226H383Zm222 0v-226h195v226H605ZM160-240v-226h195v226H160Zm223 0v-226h194v226H383Zm222 0v-226h195v226H605Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100Filled.displayName = 'OnesyIconMaterialCalendarViewMonthW100Filled';

export default IconMaterialCalendarViewMonthW100Filled;
