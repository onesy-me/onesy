import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppShortcutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutW100Filled'

      short_name='AppShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M750-466H480q-14 0-23 9t-9 23v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106q0-24.75 17.63-42.38Q455.25-494 480-494h270l-80-80q-4-4-4.5-9.5t4.72-10.72Q675-599 680-599q5 0 10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5t-10.72-4.72Q665-371 665-376q0-5 5-10l80-80ZM312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v110q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-48H280v532h400v-48q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v110q0 24.75-17.62 42.37Q672.75-92 648-92H312Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutW100Filled.displayName = 'OnesyIconMaterialAppShortcutW100Filled';

export default IconMaterialAppShortcutW100Filled;
