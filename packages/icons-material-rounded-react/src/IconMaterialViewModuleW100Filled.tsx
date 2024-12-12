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
      <path d="M652-494q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h75q26 0 43 17t17 43v94q0 26-17 43t-43 17h-75Zm-205 0q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h67q26 0 43 17t17 43v94q0 26-17 43t-43 17h-67Zm-213 0q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h75q26 0 43 17t17 43v94q0 26-17 43t-43 17h-75Zm0 242q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h75q26 0 43 17t17 43v94q0 26-17 43t-43 17h-75Zm213 0q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h67q26 0 43 17t17 43v94q0 26-17 43t-43 17h-67Zm205 0q-26 0-43-17t-17-43v-94q0-26 17-43t43-17h75q26 0 43 17t17 43v94q0 26-17 43t-43 17h-75Z"/>
    </Icon>
  );
});

IconMaterialViewModuleW100Filled.displayName = 'OnesyIconMaterialViewModuleW100Filled';

export default IconMaterialViewModuleW100Filled;
