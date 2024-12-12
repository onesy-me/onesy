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
      <path d="M603-132v-28h157v-368H200v154h-28v-374h140v-92h32v92h276v-92h28v92h140v616H603ZM320-37l-19-19 128-130H66v-28h363L301-344l19-19 163 163L320-37Z"/>
    </Icon>
  );
});

IconMaterialEventUpcomingW100Filled.displayName = 'OnesyIconMaterialEventUpcomingW100Filled';

export default IconMaterialEventUpcomingW100Filled;
