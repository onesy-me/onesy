import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopCircleW100Filled'

      short_name='StopCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-346h268v-268H346v268Zm134.17 214q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialStopCircleW100Filled.displayName = 'OnesyIconMaterialStopCircleW100Filled';

export default IconMaterialStopCircleW100Filled;
