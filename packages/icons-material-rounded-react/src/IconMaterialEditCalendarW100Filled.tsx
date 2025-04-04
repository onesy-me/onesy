import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditCalendarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarW100Filled'

      short_name='EditCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-6.8 4.64-11.4 4.64-4.6 11.5-4.6t11.36 4.6q4.5 4.6 4.5 11.4v76h276v-78q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v78h80q26 0 43 17t17 43v191q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-31H200v336q0 12 10 22t22 10h226q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232Zm340-30v-36q0-5.57 2-10.78 2-5.22 7-10.22l202-201q5-4 9.89-6 4.89-2 9.78-2 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L659-141q-5 5-10.22 7-5.21 2-10.78 2h-36q-12.75 0-21.37-8.63Q572-149.25 572-162Zm231-162 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarW100Filled.displayName = 'OnesyIconMaterialEditCalendarW100Filled';

export default IconMaterialEditCalendarW100Filled;
