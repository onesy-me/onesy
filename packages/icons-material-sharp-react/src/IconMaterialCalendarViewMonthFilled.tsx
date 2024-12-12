import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthFilled'

      short_name='CalendarViewMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-500v-260h213v260H120Zm253 0v-260h214v260H373Zm254 0v-260h213v260H627ZM120-200v-260h213v260H120Zm253 0v-260h214v260H373Zm254 0v-260h213v260H627Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthFilled.displayName = 'OnesyIconMaterialCalendarViewMonthFilled';

export default IconMaterialCalendarViewMonthFilled;
