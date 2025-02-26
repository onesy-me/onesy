import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5W100Filled'

      short_name='Looks5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306h188v-188H414v-132h160v-28H386v188h160v132H386v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLooks5W100Filled.displayName = 'OnesyIconMaterialLooks5W100Filled';

export default IconMaterialLooks5W100Filled;
