import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartCircleW100Filled'

      short_name='LineStartCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-322q-65.83 0-111.92-46.12-46.08-46.12-46.08-112T208.08-592q46.09-46 111.92-46 63 0 107.5 41.5T477-494h347v28H477q-5 61-49.5 102.5T320-322Z"/>
    </Icon>
  );
});

IconMaterialLineStartCircleW100Filled.displayName = 'OnesyIconMaterialLineStartCircleW100Filled';

export default IconMaterialLineStartCircleW100Filled;
