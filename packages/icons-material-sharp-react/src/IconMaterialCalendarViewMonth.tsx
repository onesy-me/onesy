import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonth'

      short_name='CalendarViewMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-520h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM160-240h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonth.displayName = 'OnesyIconMaterialCalendarViewMonth';

export default IconMaterialCalendarViewMonth;
