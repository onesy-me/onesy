import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddW100Filled'

      short_name='SignalCellularAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759.96-132q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H640q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H774v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM204-132q-14 0-22-9.5t-8-20.17q0-5.33 2-10.83t7-10.5l594-594q5-5 10.5-7t10.83-2q10.67 0 20.17 8 9.5 8 9.5 22v230q0 14-10 22t-24 6q-10-2-19-2.5t-15-.5q-97.84 0-166.42 68.58Q525-363.84 525-266q0 25 5.5 50t16.5 48q6 13-.75 24.5T526-132H204Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddW100Filled.displayName = 'OnesyIconMaterialSignalCellularAddW100Filled';

export default IconMaterialSignalCellularAddW100Filled;
