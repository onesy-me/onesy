import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflineBoltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineBoltW100Filled'

      short_name='OfflineBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM482-446v161q0 9 8.5 10.5T501-281l65-210q2-8-2.17-15.5-4.18-7.5-11.83-7.5h-68v-166q0-9-8.5-10.5T465-684l-69 215q-2 8 2 15.5t12 7.5h72Z"/>
    </Icon>
  );
});

IconMaterialOfflineBoltW100Filled.displayName = 'OnesyIconMaterialOfflineBoltW100Filled';

export default IconMaterialOfflineBoltW100Filled;
