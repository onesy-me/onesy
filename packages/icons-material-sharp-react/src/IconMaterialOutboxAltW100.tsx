import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboxAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAltW100'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-316 354-164-354-164v328Zm28-44v-80l120-40-120-40v-80l260 120-260 120ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialOutboxAltW100.displayName = 'OnesyIconMaterialOutboxAltW100';

export default IconMaterialOutboxAltW100;
