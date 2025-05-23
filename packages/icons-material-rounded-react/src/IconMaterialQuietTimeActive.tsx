import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuietTimeActive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActive'

      short_name='QuietTimeActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-251q-12 12-28.5 12T763-250q-12-12-12-28.5t12-28.5q14-13 23.5-26t18.5-32q-85-8-161.5-44.5T506-507q-63-63-99-139t-43-160q-20 11-31 19t-28 24q-11 11-28 11t-28-11q-11-11-11-28t11-28q30-27 60.5-46t77.5-40q20-9 39.5 5t18.5 37q-3 85 27.5 162T563-564q60 60 138 91.5T862-444q23-1 36.5 18t5.5 41q-15 39-35.5 71T819-251ZM748-66l-81-80q-35 13-71 19.5t-72 6.5q-84 0-157.5-32t-128-86.5Q184-293 152-366.5T120-524q0-36 6.5-72t19.5-71l-78-78q-12-12-12-29t12-29q12-12 29-12t29 12l678 680q11 11 11 28t-11 28q-11 11-28 11.5T748-66ZM524-200q20 0 39.5-2.5T603-210L210-603q-5 21-7.5 40.5T200-524q0 135 94.5 229.5T524-200ZM406-407Zm116-116Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActive.displayName = 'OnesyIconMaterialQuietTimeActive';

export default IconMaterialQuietTimeActive;
