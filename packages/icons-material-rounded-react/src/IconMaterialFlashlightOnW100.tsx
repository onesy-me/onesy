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
      <path d="M372-192v-344l-70-105q-5-8-7.5-16t-2.5-17v-94q0-25 17.5-42.5T352-828h256q25 0 42.5 17.5T668-768v94q0 9-2.5 17t-7.5 16l-70 105v344q0 25-17.5 42.5T528-132h-96q-25 0-42.5-17.5T372-192Zm108-174q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10ZM320-734h320v-34q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v34Zm320 28H320v42l80 120v352q0 14 9 23t23 9h96q14 0 23-9t9-23v-352l80-120v-42ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100.displayName = 'OnesyIconMaterialFlashlightOnW100';

export default IconMaterialFlashlightOnW100;
