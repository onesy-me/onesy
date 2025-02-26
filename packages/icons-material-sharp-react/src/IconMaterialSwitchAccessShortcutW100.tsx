import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessShortcutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutW100'

      short_name='SwitchAccessShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M576-131q-105-46-166.5-140.5T348-480q0-97 46.5-182T523-800H344v-28h232v232h-28v-189q-81 48-126.5 129T376-481q0 103 54 188.5T576-162v31Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutW100.displayName = 'OnesyIconMaterialSwitchAccessShortcutW100';

export default IconMaterialSwitchAccessShortcutW100;
