import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsMmaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaW100Filled'

      short_name='SportsMma'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-192q-17 0-28.5-11.5T332-232v-80h300v80q0 17-11.5 28.5T592-192H372Zm324-480v150q0 3-2 8l-24 114q-3 12-12.3 20t-21.7 8H322q-12.4 0-21.7-8-9.3-8-12.3-20l-22-112q-2-5-2-8v-216q0-26 17-43t43.33-17h255.34Q606-796 623-779t17 43v64q0-11.9 8.07-19.95 8.07-8.05 20-8.05t19.93 8.05q8 8.05 8 19.95ZM400-572h104q11 0 19.5-8.03t8.5-19.5q0-11.47-8.5-19.97Q515-628 504-628H400q-11 0-19.5 8.03t-8.5 19.5q0 11.47 8.5 19.97Q389-572 400-572Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaW100Filled.displayName = 'OnesyIconMaterialSportsMmaW100Filled';

export default IconMaterialSportsMmaW100Filled;
