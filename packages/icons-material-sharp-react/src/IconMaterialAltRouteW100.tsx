import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltRouteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltRouteW100'

      short_name='AltRoute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-133q0-54-15-87t-47-60l20-20q14 13 29.5 33.5T480-355q11-26 31.5-50.5T555-450q54-47 83-118t27-205l-89 89-20-20 124-124 124 124-20 20-91-91q2 132-27.5 210.5T575-430q-35 32-58 64t-23 101v133h-28ZM277-636q-5-21-7.5-61t-2.5-78l-91 91-20-20 124-124 124 124-20 20-89-89q-1 37 1.5 73t7.5 58l-27 6Zm71 167q-15-19-29.5-44.5T297-559l27-7q6 17 17.5 38.5T368-489l-20 20Z"/>
    </Icon>
  );
});

IconMaterialAltRouteW100.displayName = 'OnesyIconMaterialAltRouteW100';

export default IconMaterialAltRouteW100;
