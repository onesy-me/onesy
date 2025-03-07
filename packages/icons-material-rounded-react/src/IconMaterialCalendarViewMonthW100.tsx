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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-282h195v-226H192q-14 0-23 9t-9 23v194Zm223 0h194v-226H383v226Zm222 0h195v-194q0-14-9-23t-23-9H605v226ZM355-240v-226H160v194q0 14 9 23t23 9h163Zm28 0h194v-226H383v226Zm222 0h163q14 0 23-9t9-23v-194H605v226Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100.displayName = 'OnesyIconMaterialCalendarViewMonthW100';

export default IconMaterialCalendarViewMonthW100;
