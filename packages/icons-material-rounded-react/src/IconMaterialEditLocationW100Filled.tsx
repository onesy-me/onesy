import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationW100Filled'

      short_name='EditLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m536-596-20-20-152 152q-2 2-3 4.5t-1 5.5v4q0 4 3 7t7 3h4q3 0 5.5-1t4.5-3l152-152Zm29-29 22-22q3-3 3-6.5t-3-6.5l-7-7q-3-3-6.5-3t-6.5 3l-22 22 20 20Zm-85 478q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-7 6-15.5 9t-16.5 3Z"/>
    </Icon>
  );
});

IconMaterialEditLocationW100Filled.displayName = 'OnesyIconMaterialEditLocationW100Filled';

export default IconMaterialEditLocationW100Filled;
