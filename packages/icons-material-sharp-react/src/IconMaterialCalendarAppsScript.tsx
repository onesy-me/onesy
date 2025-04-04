import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarAppsScript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAppsScript'

      short_name='CalendarAppsScript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M578-80q-17 0-28.5-11.5T538-120q0-17 11.5-28.5T578-160h113l-92-65q-14-10-16.5-25.5T589-280q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T890-390q16 5 25 18.5t4 29.5L849-80H578Zm-458-80v-640h120v-80h80v80h240v-80h80v80h120v324q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H120Zm80-480h480v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialCalendarAppsScript.displayName = 'OnesyIconMaterialCalendarAppsScript';

export default IconMaterialCalendarAppsScript;
