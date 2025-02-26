import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewSidebarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarW100'

      short_name='ViewSidebar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm526-366h142v-142H658v142Zm0 168h142v-140H658v140ZM160-240h470v-480H160v480Zm498 0h142v-142H658v142Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarW100.displayName = 'OnesyIconMaterialViewSidebarW100';

export default IconMaterialViewSidebarW100;
