import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortStayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayW100Filled'

      short_name='ShortStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-600q-23 0-38.5-15.5T338-654q0-23 15.5-38.5T392-708q23 0 38.5 15.5T446-654q0 23-15.5 38.5T392-600Zm288.15 494Q608-106 557-156.85t-51-123Q506-352 556.85-403t123-51Q752-454 803-403.15t51 123Q854-208 803.15-157t-123 51ZM747-193l20-20-73-72.59V-394h-28v120l81 81Zm-563 61v-696h416v286q-8 2-14.5 4.5T572-532v-268H212v292h310v4q-45 32-73 75t-38 95h-5v-80h-28v80h-80v28h80v80h28v-54q0 40 11.5 77.5T450-132H184Z"/>
    </Icon>
  );
});

IconMaterialShortStayW100Filled.displayName = 'OnesyIconMaterialShortStayW100Filled';

export default IconMaterialShortStayW100Filled;
