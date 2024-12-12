import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeW100Filled'

      short_name='DeveloperMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-334 198-480l146-146 20 20-126 126 126 126-20 20Zm-92 54h28v66h400v-66h28v188H252v-188Zm28-400h-28v-188h456v188h-28v-66H280v66Zm336 346-20-20 126-126-126-126 20-20 146 146-146 146Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeW100Filled.displayName = 'OnesyIconMaterialDeveloperModeW100Filled';

export default IconMaterialDeveloperModeW100Filled;
