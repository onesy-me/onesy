import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditCalendarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarW100'

      short_name='EditCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v191q0 6-4 10t-10 4q-6 0-10-4t-4-10v-31H200v336q0 12 10 22t22 10h226q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm-32-424h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Zm372 394v-36q0-6 2-11t7-10l202-201q5-5 10-6.5t10-1.5q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L659-141q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T572-162Zm268-200-37-38 37 38ZM600-160h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarW100.displayName = 'OnesyIconMaterialEditCalendarW100';

export default IconMaterialEditCalendarW100;
