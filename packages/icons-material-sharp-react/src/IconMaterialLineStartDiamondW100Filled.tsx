import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondW100Filled'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-316 196-480l164-164 150 150h314v28H510L360-316Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondW100Filled.displayName = 'OnesyIconMaterialLineStartDiamondW100Filled';

export default IconMaterialLineStartDiamondW100Filled;
