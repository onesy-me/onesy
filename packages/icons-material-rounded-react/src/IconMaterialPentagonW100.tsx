import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonW100'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-174h356q11 0 19-6t11-16l120-360q3-10 0-20.5T796-593L498-801q-8-6-18-6t-18 6L164-593q-9 6-12 16.5t0 20.5l120 360q3 10 11 16t19 6Zm0 28q-20 0-35.5-11T245-187L125-548q-6-19 0-38t23-30l298-208q16-11 34-11t34 11l298 208q17 11 23 30t0 38L715-187q-6 19-21.5 30T658-146H302Zm178-345Z"/>
    </Icon>
  );
});

IconMaterialPentagonW100.displayName = 'OnesyIconMaterialPentagonW100';

export default IconMaterialPentagonW100;
