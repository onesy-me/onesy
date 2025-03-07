import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventUpcomingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcomingW100'

      short_name='EventUpcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-132H617q-6 0-10-4t-4-10q0-6 4-10t10-4h111q12 0 22-10t10-22v-336H200v140q0 6-4 10t-10 4q-6 0-10-4t-4-10v-300q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17Zm-299-54H80q-6 0-10-4t-4-10q0-6 4-10t10-4h349L310-335q-4-4-4-9t4-9q4-4 9.5-4t9.5 4l133 132q9 9 9 21t-9 21L329-46q-4 4-9.5 3.5T310-47q-4-4-4-9t4-9l119-121ZM200-556h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Z"/>
    </Icon>
  );
});

IconMaterialEventUpcomingW100.displayName = 'OnesyIconMaterialEventUpcomingW100';

export default IconMaterialEventUpcomingW100;
