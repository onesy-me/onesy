import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIndeterminateCheckBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxW100Filled'

      short_name='IndeterminateCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-466h320q6 0 10-4t4-10q0-6-4-10t-10-4H320q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-88 294q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxW100Filled.displayName = 'OnesyIconMaterialIndeterminateCheckBoxW100Filled';

export default IconMaterialIndeterminateCheckBoxW100Filled;
