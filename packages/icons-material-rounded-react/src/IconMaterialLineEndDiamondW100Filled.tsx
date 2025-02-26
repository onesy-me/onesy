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
      <path d="M579-337 450-466H150q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h300l129-129q9-9 21-9t21 9l122 122q9 9 9 21t-9 21L621-337q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondW100Filled.displayName = 'OnesyIconMaterialLineEndDiamondW100Filled';

export default IconMaterialLineEndDiamondW100Filled;
