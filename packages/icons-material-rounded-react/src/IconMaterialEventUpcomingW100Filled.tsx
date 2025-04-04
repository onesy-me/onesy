import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventUpcomingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcomingW100Filled'

      short_name='EventUpcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-132H617q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h111q12 0 22-10t10-22v-336H200v140q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-300q0-26 17-43t43-17h80v-76q0-6.8 4.64-11.4 4.64-4.6 11.5-4.6t11.36 4.6q4.5 4.6 4.5 11.4v76h276v-78q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17Zm-299-54H80q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h349L310-335q-4-4-4-9t4-9.17q3.67-3.83 9.33-3.83 5.67 0 9.67 4l133 132q9 9 9 21t-9 21L329-46q-4 4-9.5 3.5t-9.67-4.67Q306-51 306-56t4-9l119-121Z"/>
    </Icon>
  );
});

IconMaterialEventUpcomingW100Filled.displayName = 'OnesyIconMaterialEventUpcomingW100Filled';

export default IconMaterialEventUpcomingW100Filled;
