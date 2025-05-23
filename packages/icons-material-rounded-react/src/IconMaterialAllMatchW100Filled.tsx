import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchW100Filled'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m696-211-29-29q-4-4-9.5-4t-9.5 4q-4 4-4 9.5t4 9.5l33 33q7 7 15.5 7t15.5-7l80-79q4-4 4.5-9t-4.5-10q-4-4-10-4t-10 4l-76 75Zm24 125q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86ZM255-252q-18 0-26.5-15.5T230-298l105-165q5-8 5-17t-5-17L230-662q-10-15-1.5-30.5T255-708h297q22 0 41.5 10t32.5 28l111 157q7 10 1 21t-18 10q-49 0-92.5 17.5T551-416q-30 28-50 65t-26 80q-2 8-7.5 13.5T454-252H255Z"/>
    </Icon>
  );
});

IconMaterialAllMatchW100Filled.displayName = 'OnesyIconMaterialAllMatchW100Filled';

export default IconMaterialAllMatchW100Filled;
