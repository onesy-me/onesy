import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100Filled'

      short_name='PowerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-172v-102L292-402v-212h28v41L78-816l20-20 736 736-20 20-234-234-40 40v102H420Zm236-218L390-656v-132h28v160h124v-160h28v160h98v226l-12 12Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100Filled.displayName = 'OnesyIconMaterialPowerOffW100Filled';

export default IconMaterialPowerOffW100Filled;
