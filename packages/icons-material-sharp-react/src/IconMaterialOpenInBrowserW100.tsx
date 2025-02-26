import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInBrowserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserW100'

      short_name='OpenInBrowser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H614v-28h146v-480H200v480h146v28H172Zm294 0v-254l-90 90-20-20 124-124 124 124-20 20-90-90v254h-28Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserW100.displayName = 'OnesyIconMaterialOpenInBrowserW100';

export default IconMaterialOpenInBrowserW100;
