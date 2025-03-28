import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaidW100Filled'

      short_name='Paid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM479-220q6 0 10.5-4.5T494-235v-31q41-2 81.5-28.5T616-378q0-42-26-70t-98-54q-68-24-85-41t-17-49q0-32 25.5-54t66.5-22q26 0 45.5 10.5T561-630q3 4 8 6t9.76 0q6.48-2.4 8.86-8.2Q590-638 586-643q-16-22-40-35.5T496-694v-31q0-6-4.5-10.5T481-740q-6 0-10.5 4.5T466-725v31q-53 8-79.5 37.5T360-592q0 42 27 67t93 49q65 24 86.5 43.5T588-378q0 45-33 64.5T486-294q-32.5 0-58.75-17T383-358q-3-5-9-6.5t-10.87.61q-5.25 2.1-7.69 8Q353-350 356-345q18 33 45 51t63 26v33q0 6 4.5 10.5T479-220Z"/>
    </Icon>
  );
});

IconMaterialPaidW100Filled.displayName = 'OnesyIconMaterialPaidW100Filled';

export default IconMaterialPaidW100Filled;
