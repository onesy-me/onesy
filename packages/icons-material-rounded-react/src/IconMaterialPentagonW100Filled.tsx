import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonW100Filled'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-146q-20 0-35.5-11T245-187L125-548q-6-19 0-38t23-30l298-208q16-11 34-11t34 11l298 208q17 11 23 30t0 38L715-187q-6 19-21.5 30T658-146H302Z"/>
    </Icon>
  );
});

IconMaterialPentagonW100Filled.displayName = 'OnesyIconMaterialPentagonW100Filled';

export default IconMaterialPentagonW100Filled;
