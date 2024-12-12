import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMosqueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueW100Filled'

      short_name='Mosque'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-602v-74q0-33 16-61.5t43-46.5l155-105 155 105q27 18 43 46.5t16 61.5v74H266ZM66-146v-480q-18-8-29-22t-11-32q0-16 13-36.5T80-763q28 26 41 46.5t13 36.5q0 18-11 32t-29 22v212h132v-160h508v160h132v-212q-18-8-29-22t-11-32q0-16 13-36.5t41-46.5q28 26 41 46.5t13 36.5q0 18-11 32t-29 22v480H546v-200H414v200H66Z"/>
    </Icon>
  );
});

IconMaterialMosqueW100Filled.displayName = 'OnesyIconMaterialMosqueW100Filled';

export default IconMaterialMosqueW100Filled;
