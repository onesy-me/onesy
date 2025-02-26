import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnFilled'

      short_name='CalendarAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-560-80v-640h120v-80h80v80h240v-80h80v80h120v324q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H120Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnFilled.displayName = 'OnesyIconMaterialCalendarAddOnFilled';

export default IconMaterialCalendarAddOnFilled;
