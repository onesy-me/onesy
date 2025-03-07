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
      <path d="M376-346h208q12.75 0 21.38-8.63Q614-363.25 614-376v-208q0-12.75-8.62-21.38Q596.75-614 584-614H376q-12.75 0-21.37 8.62Q346-596.75 346-584v208q0 12.75 8.63 21.37Q363.25-346 376-346Zm104.17 214q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialStopCircleW100Filled.displayName = 'OnesyIconMaterialStopCircleW100Filled';

export default IconMaterialStopCircleW100Filled;
