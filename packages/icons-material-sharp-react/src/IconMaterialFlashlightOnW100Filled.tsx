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
      <path d="M292-734v-94h376v94H292Zm187.88 368q14.12 0 24.12-9.88 10-9.88 10-24T504.12-424q-9.88-10-24-10T456-424.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM372-132v-404l-80-120v-50h376v50l-80 120v404H372Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100Filled.displayName = 'OnesyIconMaterialFlashlightOnW100Filled';

export default IconMaterialFlashlightOnW100Filled;
