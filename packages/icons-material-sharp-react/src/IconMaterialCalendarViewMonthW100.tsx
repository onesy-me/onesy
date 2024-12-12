import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthW100'

      short_name='CalendarViewMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-494h195v-226H160v226Zm223 0h194v-226H383v226Zm222 0h195v-226H605v226ZM160-240h195v-226H160v226Zm223 0h194v-226H383v226Zm222 0h195v-226H605v226Zm-473 28v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100.displayName = 'OnesyIconMaterialCalendarViewMonthW100';

export default IconMaterialCalendarViewMonthW100;
