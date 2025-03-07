import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPackageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageW100'

      short_name='Package'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-540 60-30q10-5 20-5t20 5l60 30v-220H400v220ZM294-306q-6 0-10-4t-4-10q0-6 4-10t10-4h172q6 0 10 4t4 10q0 6-4 10t-10 4H294Zm-62 134q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-588v560-560Zm32 560h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H588v242q0 8-7 12.5t-15 .5l-86-43-86 43q-8 4-15-.5t-7-12.5v-242H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialPackageW100.displayName = 'OnesyIconMaterialPackageW100';

export default IconMaterialPackageW100;
