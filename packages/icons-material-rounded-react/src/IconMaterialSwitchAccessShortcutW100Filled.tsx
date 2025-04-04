import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessShortcutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutW100Filled'

      short_name='SwitchAccessShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M548-785q-81 48-126.5 129T376-481q0 98 50 181.5T562-169q6 3 8.5 9t-.5 11q-3 6-9.5 7t-12.5-2q-93-51-146.5-140.5T348-480q0-97 46.5-182T523-800H358q-6 0-10-4t-4-10q0-6 4-10t10-4h188q13 0 21.5 8.5T576-798v188q0 6-4 10t-10 4q-6 0-10-4t-4-10v-175Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutW100Filled.displayName = 'OnesyIconMaterialSwitchAccessShortcutW100Filled';

export default IconMaterialSwitchAccessShortcutW100Filled;
