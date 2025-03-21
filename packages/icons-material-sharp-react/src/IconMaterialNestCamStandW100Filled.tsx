import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamStandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandW100Filled'

      short_name='NestCamStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m209-172 27-312q6-74 51-130.5T398-694v134q0 34 24 58t58 24q34 0 58-24t24-58v-134q67 23 111.5 79.5T725-484l26 312H209Zm271-334q-23 0-38.5-15.5T426-560v-160q0-23 15.5-38.5T480-774q23 0 38.5 15.5T534-720v160q0 23-15.5 38.5T480-506Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandW100Filled.displayName = 'OnesyIconMaterialNestCamStandW100Filled';

export default IconMaterialNestCamStandW100Filled;
