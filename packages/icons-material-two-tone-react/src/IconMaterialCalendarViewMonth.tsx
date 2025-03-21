import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonth'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="5" opacity=".3" width="4" x="4" y="6"/><rect height="5" opacity=".3" width="4" x="4" y="13"/><rect height="5" opacity=".3" width="4" x="10" y="13"/><rect height="5" opacity=".3" width="4" x="16" y="13"/><rect height="5" opacity=".3" width="4" x="16" y="6"/><rect height="5" opacity=".3" width="4" x="10" y="6"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4v-5h4V18z M8,11H4V6h4V11z M14,18h-4v-5h4V18z M14,11h-4V6h4V11z M20,18h-4v-5h4V18z M20,11h-4V6h4V11z"/></g></g>
    </Icon>
  );
});

IconMaterialCalendarViewMonth.displayName = 'OnesyIconMaterialCalendarViewMonth';

export default IconMaterialCalendarViewMonth;
