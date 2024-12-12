import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerW100Filled'

      short_name='Computer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M94-200q-6 0-10-4t-4-10q0-6 4-10t10-4h772q6 0 10 4t4 10q0 6-4 10t-10 4H94Zm98-68q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h576q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialComputerW100Filled.displayName = 'OnesyIconMaterialComputerW100Filled';

export default IconMaterialComputerW100Filled;
