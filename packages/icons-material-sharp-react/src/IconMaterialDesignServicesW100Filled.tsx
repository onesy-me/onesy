import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesignServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesignServicesW100Filled'

      short_name='DesignServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m368-480 93-93-90-90-47 47-20-20 47-47-88-88-93 93 198 198Zm309 309 93-93-88-88-47 47-20-20 47-47-89-89-93 93 197 197Zm-64-515 73 73 74-74-73-73-74 74ZM285-172H172v-113l176-176-216-217 131-131 218 217 208-208 110 114-205 206 215 217-131 131-217-216-176 176Z"/>
    </Icon>
  );
});

IconMaterialDesignServicesW100Filled.displayName = 'OnesyIconMaterialDesignServicesW100Filled';

export default IconMaterialDesignServicesW100Filled;
