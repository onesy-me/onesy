import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewModuleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleW100Filled'

      short_name='ViewModule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M592-494v-214h195v214H592Zm-205 0v-214h187v214H387Zm-213 0v-214h195v214H174Zm0 242v-214h195v214H174Zm213 0v-214h187v214H387Zm205 0v-214h195v214H592Z"/>
    </Icon>
  );
});

IconMaterialViewModuleW100Filled.displayName = 'OnesyIconMaterialViewModuleW100Filled';

export default IconMaterialViewModuleW100Filled;
