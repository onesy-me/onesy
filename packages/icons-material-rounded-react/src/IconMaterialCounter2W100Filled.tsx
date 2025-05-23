import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter2W100Filled'

      short_name='Counter2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM560-306q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H414v-100q0-14 9-23t23-9h68q26 0 43-17t17-43v-68q0-26-17-43t-43-17H400q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h114q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-26 0-43 17t-17 43v98q0 12.75 8.63 21.37Q403.25-306 416-306h144Z"/>
    </Icon>
  );
});

IconMaterialCounter2W100Filled.displayName = 'OnesyIconMaterialCounter2W100Filled';

export default IconMaterialCounter2W100Filled;
