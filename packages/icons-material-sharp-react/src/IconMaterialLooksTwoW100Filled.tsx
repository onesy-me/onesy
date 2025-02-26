import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksTwoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoW100Filled'

      short_name='LooksTwo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306h188v-28H414v-132h160v-188H386v28h160v132H386v188ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoW100Filled.displayName = 'OnesyIconMaterialLooksTwoW100Filled';

export default IconMaterialLooksTwoW100Filled;
