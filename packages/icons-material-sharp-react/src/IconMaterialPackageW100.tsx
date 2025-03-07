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
      <path d="m400-540 80-40 80 40v-220H400v220ZM280-306v-28h200v28H280ZM172-172v-616h616v616H172Zm28-588v560-560Zm0 560h560v-560H588v266l-108-54-108 54v-266H200v560Z"/>
    </Icon>
  );
});

IconMaterialPackageW100.displayName = 'OnesyIconMaterialPackageW100';

export default IconMaterialPackageW100;
