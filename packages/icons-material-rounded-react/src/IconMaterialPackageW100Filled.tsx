import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPackageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageW100Filled'

      short_name='Package'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm162-333 86-43 86 43q8 4 15-.5t7-12.5v-242H372v242q0 8 7 12.5t15 .5ZM294-306h172q6 0 10-4t4-10q0-6-4-10t-10-4H294q-6 0-10 4t-4 10q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialPackageW100Filled.displayName = 'OnesyIconMaterialPackageW100Filled';

export default IconMaterialPackageW100Filled;
