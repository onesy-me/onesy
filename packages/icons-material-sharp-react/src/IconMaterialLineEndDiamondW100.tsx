import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondW100'

      short_name='LineEndDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-356 124-124-124-124-124 124 124 124Zm0 40L450-466H136v-28h314l150-150 164 164-164 164Zm0-164Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondW100.displayName = 'OnesyIconMaterialLineEndDiamondW100';

export default IconMaterialLineEndDiamondW100;
