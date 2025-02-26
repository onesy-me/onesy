import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewSidebarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarFilled'

      short_name='ViewSidebar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-640v-160h160v160H720Zm0 240v-160h160v160H720ZM80-160v-640h560v640H80Zm640 0v-160h160v160H720Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarFilled.displayName = 'OnesyIconMaterialViewSidebarFilled';

export default IconMaterialViewSidebarFilled;
