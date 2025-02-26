import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6W100Filled'

      short_name='Looks6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M414-494v-132h120v-28H386v348h188v-188H414Zm0 28h132v132H414v-132ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLooks6W100Filled.displayName = 'OnesyIconMaterialLooks6W100Filled';

export default IconMaterialLooks6W100Filled;
