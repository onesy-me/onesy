import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorW100Filled'

      short_name='Error'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q8.5 0 14.25-5.75T500-328q0-8.5-5.75-14.25T480-348q-8.5 0-14.25 5.75T460-328q0 8.5 5.75 14.25T480-308Zm.04-124q5.96 0 9.96-4.02 4-4.03 4-9.98v-212q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v212q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm.13 300q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialErrorW100Filled.displayName = 'OnesyIconMaterialErrorW100Filled';

export default IconMaterialErrorW100Filled;
