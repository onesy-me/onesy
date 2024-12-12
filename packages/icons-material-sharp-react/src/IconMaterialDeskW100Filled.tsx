import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskW100Filled'

      short_name='Desk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M136-266v-398h688v398h-28v-80H599v80h-28v-370H164v370h-28Zm463-268h197v-102H599v102Zm0 160h197v-132H599v132Z"/>
    </Icon>
  );
});

IconMaterialDeskW100Filled.displayName = 'OnesyIconMaterialDeskW100Filled';

export default IconMaterialDeskW100Filled;
