import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewDayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayW100'

      short_name='CalendarViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-332q-25 0-42.5-17.5T172-392v-176q0-25 17.5-42.5T232-628h496q25 0 42.5 17.5T788-568v176q0 25-17.5 42.5T728-332H232Zm0-28h496q14 0 23-9t9-23v-176q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v176q0 14 9 23t23 9Zm-47-368q-5 0-9-4t-4-10q0-6 4-10t10-4h589q5 0 9 4t4 10q0 6-4 10t-10 4H185Zm0 524q-5 0-9-4t-4-10q0-6 4-10t10-4h589q5 0 9 4t4 10q0 6-4 10t-10 4H185Zm15-396h32q-14 0-23 9t-9 23v176q0 14 9 23t23 9h-32v-240Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayW100.displayName = 'OnesyIconMaterialCalendarViewDayW100';

export default IconMaterialCalendarViewDayW100;
