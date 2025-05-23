import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDetectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDetectW100Filled'

      short_name='NestDetect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-106q-48 0-81-33t-33-81v-574q0-24.75 17.63-42.38Q301.25-854 326-854h108q24.75 0 42.38 17.62Q494-818.75 494-794v574q0 48-33 81t-81 33Zm0-28q35 0 60.5-25.5T466-220q0-35-25.5-60.5T380-306q-35 0-60.5 25.5T294-220q0 35 25.5 60.5T380-134Zm306-132q-24.75 0-42.37-17.63Q626-301.25 626-326v-308q0-24.75 17.63-42.38Q661.25-694 686-694h28q24.75 0 42.38 17.62Q774-658.75 774-634v308q0 24.75-17.62 42.37Q738.75-266 714-266h-28Z"/>
    </Icon>
  );
});

IconMaterialNestDetectW100Filled.displayName = 'OnesyIconMaterialNestDetectW100Filled';

export default IconMaterialNestDetectW100Filled;
