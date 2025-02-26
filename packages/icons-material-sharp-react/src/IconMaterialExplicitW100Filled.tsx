import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplicitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitW100Filled'

      short_name='Explicit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306h188v-28H414v-132h160v-28H414v-132h160v-28H386v348ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialExplicitW100Filled.displayName = 'OnesyIconMaterialExplicitW100Filled';

export default IconMaterialExplicitW100Filled;
