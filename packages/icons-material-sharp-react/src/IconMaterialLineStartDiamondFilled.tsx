import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondFilled'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200 80-480l280-280 240 240h280v80H600L360-200Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondFilled.displayName = 'OnesyIconMaterialLineStartDiamondFilled';

export default IconMaterialLineStartDiamondFilled;
