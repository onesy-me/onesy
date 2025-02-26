import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTodayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayW100Filled'

      short_name='Today'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-346q-33 0-56.5-23.5T280-426q0-33 23.5-56.5T360-506q33 0 56.5 23.5T440-426q0 33-23.5 56.5T360-346ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Z"/>
    </Icon>
  );
});

IconMaterialTodayW100Filled.displayName = 'OnesyIconMaterialTodayW100Filled';

export default IconMaterialTodayW100Filled;
