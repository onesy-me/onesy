import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoW100Filled'

      short_name='HdrAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M314-298h30l42-114h188l42 114h30L496-702h-28L314-298Zm82-140 84-220h4l80 220H396Zm84.17 306q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoW100Filled.displayName = 'OnesyIconMaterialHdrAutoW100Filled';

export default IconMaterialHdrAutoW100Filled;
