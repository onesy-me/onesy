import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewSidebarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarW100Filled'

      short_name='ViewSidebar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-588v-160h160v160H668Zm0 188v-160h160v160H668ZM132-212v-536h508v536H132Zm536 0v-160h160v160H668Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarW100Filled.displayName = 'OnesyIconMaterialViewSidebarW100Filled';

export default IconMaterialViewSidebarW100Filled;
