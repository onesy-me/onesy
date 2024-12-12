import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeW100'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-402l268-203 268 203v402h-28v-388L480-742 240-560v388h-28Zm122-29h292v-132H334v132Zm0-160h292v-132H334v132Zm-28 188v-348h348v348H306Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeW100.displayName = 'OnesyIconMaterialGarageHomeW100';

export default IconMaterialGarageHomeW100;
