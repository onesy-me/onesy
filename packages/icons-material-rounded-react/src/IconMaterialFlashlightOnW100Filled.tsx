import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnW100Filled'

      short_name='FlashlightOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-734v-34q0-24.75 17.63-42.38Q327.25-828 352-828h256q24.75 0 42.38 17.62Q668-792.75 668-768v34H292Zm187.88 368q14.12 0 24.12-9.88 10-9.88 10-24T504.12-424q-9.88-10-24-10T456-424.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM372-192v-344l-70-105q-5-8-7.5-16.09T292-674v-32h376v32q0 8.82-2.5 16.91T658-641l-70 105v344q0 24.75-17.62 42.37Q552.75-132 528-132h-96q-24.75 0-42.37-17.63Q372-167.25 372-192Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100Filled.displayName = 'OnesyIconMaterialFlashlightOnW100Filled';

export default IconMaterialFlashlightOnW100Filled;
