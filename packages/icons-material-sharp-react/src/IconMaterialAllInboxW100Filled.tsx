import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxW100Filled'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-408q37 0 65-22.5t28-57.5h147v-312H294v312h147q0 35 28 57.5t65 22.5ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100Filled.displayName = 'OnesyIconMaterialAllInboxW100Filled';

export default IconMaterialAllInboxW100Filled;
