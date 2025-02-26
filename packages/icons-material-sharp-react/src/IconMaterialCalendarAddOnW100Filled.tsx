import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarAddOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnW100Filled'

      short_name='CalendarAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-106v-120H586v-28h120v-120h28v120h120v28H734v120h-28ZM172-212v-536h140v-92h32v92h196v-92h28v92h140v284h-28v-64H200v288h295v28H172Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnW100Filled.displayName = 'OnesyIconMaterialCalendarAddOnW100Filled';

export default IconMaterialCalendarAddOnW100Filled;
