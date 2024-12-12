import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelCloseW100Filled'

      short_name='LeftPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M613-363v-234L495-480l118 117ZM348-200h412v-560H348v560Zm-176 28v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseW100Filled.displayName = 'OnesyIconMaterialLeftPanelCloseW100Filled';

export default IconMaterialLeftPanelCloseW100Filled;
