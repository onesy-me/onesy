import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthCrossW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthCrossW100Filled'

      short_name='HealthCross'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M355-172v-183H172v-249h183v-184h249v184h184v249H604v183H355Z"/>
    </Icon>
  );
});

IconMaterialHealthCrossW100Filled.displayName = 'OnesyIconMaterialHealthCrossW100Filled';

export default IconMaterialHealthCrossW100Filled;
