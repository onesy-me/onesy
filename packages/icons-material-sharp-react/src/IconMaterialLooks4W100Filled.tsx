import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4W100Filled'

      short_name='Looks4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm374-134h28v-348h-28v160H414v-160h-28v188h160v160Z"/>
    </Icon>
  );
});

IconMaterialLooks4W100Filled.displayName = 'OnesyIconMaterialLooks4W100Filled';

export default IconMaterialLooks4W100Filled;
