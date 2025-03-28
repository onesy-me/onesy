import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBidLandscapeDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabledW100Filled'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M712-172H232q-26 0-43-17t-17-43v-480l-90-90q-4-4-4.5-9.5T82-822q5-5 10-5t10 5l720 720q4 4 4.5 9.5T822-82q-5 5-10 5t-10-5l-90-90Zm76-556v406q0 20-18.5 27.5T737-301L615-423l141-157q5-5 4-10.5t-5-9.5q-4-4-9.5-4t-10.5 5L595-443 301-737q-14-14-6.5-32.5T322-788h406q26 0 43 17t17 43ZM372-492l150 150q4 4 9.5 4t9.5-5L362-522 204-364q-5 5-4.5 10.5t4.5 9.5q4 4 9.5 4.5T224-344l148-148Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledW100Filled.displayName = 'OnesyIconMaterialBidLandscapeDisabledW100Filled';

export default IconMaterialBidLandscapeDisabledW100Filled;
