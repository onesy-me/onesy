import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMonthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonthW100Filled'

      short_name='CalendarMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-336H200v336q0 12 10 22t22 10Zm248-232q-11 0-19.5-8.5T452-420q0-11 8.5-19.5T480-448q11 0 19.5 8.5T508-420q0 11-8.5 19.5T480-392Zm-160 0q-11 0-19.5-8.5T292-420q0-11 8.5-19.5T320-448q11 0 19.5 8.5T348-420q0 11-8.5 19.5T320-392Zm320 0q-11 0-19.5-8.5T612-420q0-11 8.5-19.5T640-448q11 0 19.5 8.5T668-420q0 11-8.5 19.5T640-392ZM480-240q-11 0-19.5-8.5T452-268q0-11 8.5-19.5T480-296q11 0 19.5 8.5T508-268q0 11-8.5 19.5T480-240Zm-160 0q-11 0-19.5-8.5T292-268q0-11 8.5-19.5T320-296q11 0 19.5 8.5T348-268q0 11-8.5 19.5T320-240Zm320 0q-11 0-19.5-8.5T612-268q0-11 8.5-19.5T640-296q11 0 19.5 8.5T668-268q0 11-8.5 19.5T640-240Z"/>
    </Icon>
  );
});

IconMaterialCalendarMonthW100Filled.displayName = 'OnesyIconMaterialCalendarMonthW100Filled';

export default IconMaterialCalendarMonthW100Filled;
