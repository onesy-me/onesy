import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpgradeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeW100Filled'

      short_name='Upgrade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-212v-28h348v28H306Zm160-128v-356L335-565l-19-19 164-164 164 164-19 19-131-131v356h-28Z"/>
    </Icon>
  );
});

IconMaterialUpgradeW100Filled.displayName = 'OnesyIconMaterialUpgradeW100Filled';

export default IconMaterialUpgradeW100Filled;
