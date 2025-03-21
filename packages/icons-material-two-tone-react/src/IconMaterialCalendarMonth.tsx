import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMonth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonth'

      short_name='CalendarMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><rect height="2" opacity=".3" width="14" x="5" y="6"/><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z"/></g>
    </Icon>
  );
});

IconMaterialCalendarMonth.displayName = 'OnesyIconMaterialCalendarMonth';

export default IconMaterialCalendarMonth;
