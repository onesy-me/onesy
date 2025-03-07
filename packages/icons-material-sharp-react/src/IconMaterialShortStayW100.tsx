import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortStayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayW100'

      short_name='ShortStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-160h222-222Zm-28 28v-696h416v286q-9 3-15.5 5.5T572-532v-268H212v292h316q-11 6.84-20.5 14.92T492-480H212v320h222q5 8 8.47 15.14 3.46 7.15 7.53 12.86H184Zm208-468q-23 0-38.5-15.5T338-654q0-23 15.5-38.5T392-708q23 0 38.5 15.5T446-654q0 23-15.5 38.5T392-600Zm-14 374h28v-188h-28v80h-80v28h80v80Zm302.15 120Q608-106 557-156.85t-51-123Q506-352 556.85-403t123-51Q752-454 803-403.15t51 123Q854-208 803.15-157t-123 51ZM747-193l20-20-73-72.59V-394h-28v120l81 81Z"/>
    </Icon>
  );
});

IconMaterialShortStayW100.displayName = 'OnesyIconMaterialShortStayW100';

export default IconMaterialShortStayW100;
