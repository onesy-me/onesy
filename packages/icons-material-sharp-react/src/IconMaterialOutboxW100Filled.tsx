import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxW100Filled'

      short_name='Outbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm308-116q38 0 69-22t43-58h168v-392H200v392h168q12 36 43 58t69 22Zm-14-148v-194l-90 90-20-20 124-124 124 124-20 20-90-90v194h-28Z"/>
    </Icon>
  );
});

IconMaterialOutboxW100Filled.displayName = 'OnesyIconMaterialOutboxW100Filled';

export default IconMaterialOutboxW100Filled;
