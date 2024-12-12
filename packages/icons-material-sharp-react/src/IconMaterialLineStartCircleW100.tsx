import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartCircleW100'

      short_name='LineStartCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-350q53.63 0 91.81-38.19Q450-426.38 450-480q0-53.63-38.19-91.81Q373.63-610 320-610q-53.62 0-91.81 38.19Q190-533.63 190-480q0 53.62 38.19 91.81Q266.38-350 320-350Zm0 28q-65.83 0-111.92-46.12-46.08-46.12-46.08-112T208.08-592q46.09-46 111.92-46 63 0 107.5 41.5T477-494h347v28H477q-5 61-49.5 102.5T320-322Zm0-158Z"/>
    </Icon>
  );
});

IconMaterialLineStartCircleW100.displayName = 'OnesyIconMaterialLineStartCircleW100';

export default IconMaterialLineStartCircleW100;
