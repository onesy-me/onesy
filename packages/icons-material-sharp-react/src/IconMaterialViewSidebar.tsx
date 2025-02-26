import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewSidebar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebar'

      short_name='ViewSidebar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm620-453h100v-107H700v107Zm0 186h100v-106H700v106ZM160-240h460v-480H160v480Zm540 0h100v-107H700v107Z"/>
    </Icon>
  );
});

IconMaterialViewSidebar.displayName = 'OnesyIconMaterialViewSidebar';

export default IconMaterialViewSidebar;
