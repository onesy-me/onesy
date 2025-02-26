import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100Filled'

      short_name='Power'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-172v-102L292-402v-226h98v-160h28v160h124v-160h28v160h98v226L540-274v102H420Z"/>
    </Icon>
  );
});

IconMaterialPowerW100Filled.displayName = 'OnesyIconMaterialPowerW100Filled';

export default IconMaterialPowerW100Filled;
