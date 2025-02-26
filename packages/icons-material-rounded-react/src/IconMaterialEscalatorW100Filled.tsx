import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorW100Filled'

      short_name='Escalator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-286h108l200-360h92q6 0 10-4t4-10q0-6-4-10t-10-4H572L372-314h-92q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-48 114q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialEscalatorW100Filled.displayName = 'OnesyIconMaterialEscalatorW100Filled';

export default IconMaterialEscalatorW100Filled;
