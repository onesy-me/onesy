import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnW100'

      short_name='FlashlightOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-132v-404l-80-120v-172h376v172l-80 120v404H372Zm108.12-234Q466-366 456-375.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T504.12-376q-9.88 10-24 10ZM320-734h320v-66H320v66Zm320 28H320v42l80 120v384h160v-384l80-120v-42ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100.displayName = 'OnesyIconMaterialFlashlightOnW100';

export default IconMaterialFlashlightOnW100;
