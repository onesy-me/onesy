import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmallW100Filled'

      short_name='MagnificationSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm88-334q23 0 38.5-15.5T334-600q0-23-15.5-38.5T280-654q-23 0-38.5 15.5T226-600q0 23 15.5 38.5T280-546Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmallW100Filled.displayName = 'OnesyIconMaterialMagnificationSmallW100Filled';

export default IconMaterialMagnificationSmallW100Filled;
