import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPendingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingW100Filled'

      short_name='Pending'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M279.88-446q14.12 0 24.12-9.88 10-9.88 10-24T304.12-504q-9.88-10-24-10T256-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm200 0q14.12 0 24.12-9.88 10-9.88 10-24T504.12-504q-9.88-10-24-10T456-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm200 0q14.12 0 24.12-9.88 10-9.88 10-24T704.12-504q-9.88-10-24-10T656-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialPendingW100Filled.displayName = 'OnesyIconMaterialPendingW100Filled';

export default IconMaterialPendingW100Filled;
