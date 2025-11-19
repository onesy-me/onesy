import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageHeaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageHeaderW100Filled'

      short_name='PageHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-760q-6 0-10-4t-4-10q0-6 4-10t10-4h588q6 0 10 4t4 10q0 6-4 10t-10 4H186Zm542 100q26 0 43 17t17 43v368q0 26-17 43t-43 17H232q-26 0-43-17t-17-43v-368q0-26 17-43t43-17h496Z"/>
    </Icon>
  );
});

IconMaterialPageHeaderW100Filled.displayName = 'OnesyIconMaterialPageHeaderW100Filled';

export default IconMaterialPageHeaderW100Filled;
