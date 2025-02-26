import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreenW100Filled'

      short_name='SmartScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h656q26 0 43 17t17 43v336q0 26-17 43t-43 17H152Zm62-28h532v-400H214v400Zm316-176q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-200 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm300 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-200 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenW100Filled.displayName = 'OnesyIconMaterialSmartScreenW100Filled';

export default IconMaterialSmartScreenW100Filled;
