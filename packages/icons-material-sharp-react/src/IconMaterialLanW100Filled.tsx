import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanW100Filled'

      short_name='Lan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-106v-228h120v-160h200v-132H346v-228h268v228H494v132h200v160h120v228H546v-228h120v-132H294v132h120v228H146Z"/>
    </Icon>
  );
});

IconMaterialLanW100Filled.displayName = 'OnesyIconMaterialLanW100Filled';

export default IconMaterialLanW100Filled;
