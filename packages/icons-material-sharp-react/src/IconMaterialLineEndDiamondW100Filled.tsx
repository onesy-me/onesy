import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondW100Filled'

      short_name='LineEndDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-316 450-466H136v-28h314l150-150 164 164-164 164Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondW100Filled.displayName = 'OnesyIconMaterialLineEndDiamondW100Filled';

export default IconMaterialLineEndDiamondW100Filled;
