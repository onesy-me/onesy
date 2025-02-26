import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnalyticsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsW100'

      short_name='Analytics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm118-106h28v-174h-28v174Zm296 0h28v-374h-28v374Zm-148 0h28v-94h-28v94Zm0-174h28v-80h-28v80ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsW100.displayName = 'OnesyIconMaterialAnalyticsW100';

export default IconMaterialAnalyticsW100;
