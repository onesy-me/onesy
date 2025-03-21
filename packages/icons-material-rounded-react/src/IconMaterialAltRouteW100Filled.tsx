import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltRouteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltRouteW100Filled'

      short_name='AltRoute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-119q0-54-15-87t-47-60l20-20q14 13 29.5 33.5T480-355q11-26 31.5-50.5T555-450q54-47 83-118t27-205l-79 79q-4 4-9.5 4.5T566-694q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T794-694q-5 5-10 5t-10-5l-81-81q2 132-27.5 210.5T575-430q-35 32-58 64t-23 101v119q0 6-4 10t-10 4q-6 0-10-4t-4-10ZM277-636q-5-21-7.5-61t-2.5-78l-81 81q-4 4-9.5 4.5T166-694q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T394-694q-5 5-10 5t-10-5l-79-79q-1 37 1.5 73t7.5 58l-27 6Zm71 167q-15-19-29.5-44.5T297-559l27-7q6 17 17.5 38.5T368-489l-20 20Z"/>
    </Icon>
  );
});

IconMaterialAltRouteW100Filled.displayName = 'OnesyIconMaterialAltRouteW100Filled';

export default IconMaterialAltRouteW100Filled;
