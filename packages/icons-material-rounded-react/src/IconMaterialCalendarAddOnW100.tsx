import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarAddOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnW100'

      short_name='CalendarAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-226H600q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H734v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106Zm-474 14q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h80v-76q0-6.8 4.64-11.4 4.64-4.6 11.5-4.6t11.36 4.6q4.5 4.6 4.5 11.4v76h196v-78q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v78h80q26 0 43 17t17 43v210q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-50H200v256q0 12 10 22t22 10h249q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232Zm-32-344h480v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnW100.displayName = 'OnesyIconMaterialCalendarAddOnW100';

export default IconMaterialCalendarAddOnW100;
