import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountW100Filled'

      short_name='SwitchAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M559.88-496q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM352-292q-24.75 0-42.37-17.63Q292-327.25 292-352v-416q0-24.75 17.63-42.38Q327.25-828 352-828h416q24.75 0 42.38 17.62Q828-792.75 828-768v416q0 24.75-17.62 42.37Q792.75-292 768-292H352ZM192-132q-24.75 0-42.37-17.63Q132-167.25 132-192v-462q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v462q0 14 9 23t23 9h462q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Zm158-188h420q-42-44-95.82-68-53.82-24-114-24T446-388q-54 24-96 68Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100Filled.displayName = 'OnesyIconMaterialSwitchAccountW100Filled';

export default IconMaterialSwitchAccountW100Filled;
