import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeW100Filled'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-402l268-203 268 203v402h-94v-349H306v349h-94Zm122-29h292v-132H334v132Zm0-160h292v-132H334v132Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeW100Filled.displayName = 'OnesyIconMaterialGarageHomeW100Filled';

export default IconMaterialGarageHomeW100Filled;
