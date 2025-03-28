import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToRegW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegW100Filled'

      short_name='HowToReg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M397-512q-45 0-76.5-31.5T289-620q0-45 31.5-76.5T397-728q45 0 76.5 31.5T505-620q0 45-31.5 76.5T397-512ZM159-232q-13 0-21.5-8.5T129-262v-22q0-30 14.5-45.5T179-356q51-26 96-39t122-13h21q10 0 18 1 15 1 20 15t-6 25l-35 35q-14 14-18.5 32.5T403-266q8 11 2.5 22.5T386-232H159Zm450 12 192-192q4-4 9.5-4.5T821-412q5 5 5 10t-5 10L630-201q-9 9-21 9t-21-9l-71-71q-4-4-4.5-9.5T517-292q5-5 10-5t10 5l72 72Z"/>
    </Icon>
  );
});

IconMaterialHowToRegW100Filled.displayName = 'OnesyIconMaterialHowToRegW100Filled';

export default IconMaterialHowToRegW100Filled;
