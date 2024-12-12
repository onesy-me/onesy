import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutW100Filled'

      short_name='Logout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h309v28H200v560h281v28H172Zm492-184-20-20 90-90H370v-28h364l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterialLogoutW100Filled.displayName = 'OnesyIconMaterialLogoutW100Filled';

export default IconMaterialLogoutW100Filled;
